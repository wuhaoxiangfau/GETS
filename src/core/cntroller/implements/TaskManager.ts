
import { TaskFlow } from './TaskFlow';
import GameObject from '../../gameObject/implement/GameObject';
import AbstractComponent from '../../components/implements/AbstarctComponent';
import Map from '../../../util/map/Map';
import {RuntimeConfig, RuntimeConfigUnit, ServiceConfig, ServiceNameSpaces} from '../../../config/RuntimeConfig';
import ArraySet from '../../../util/ArraySet';
import GEObject from './GEObject';
import AbstractService from '../../services/implement/AbstractService';
import TaskManagerInterface from '../interface/TaskManagerInterface';
import TaskFolwInterface from '../interface/TaskFlowInterface';
import GameObjectInterface from '../../gameObject/interface/GameObjectInterface';
import GEObjectInterface from '../interface/GEObjectInterface';
class ComponentTaskIds{

    constructor(startTaskId: Array<string>, loopTaskId: Array<string>, endTaskId: Array<string>){
        this.start = startTaskId;
        this.loop = loopTaskId;
        this.end = endTaskId;
    }

    public readonly start: Array<string>;
    public readonly loop: Array<string>;
    public readonly end: Array<string>;
    [index: string]: Array<string>;
}

enum TaskType {
    START = 'start',
    LOOP = 'loop',
    END = 'end',
};


class TypeToMethodsMap{

    public readonly start = new  Map<Function, ArraySet<string>>();

    public readonly loop = new  Map<Function, ArraySet<string>>();
    
    public readonly end = new  Map<Function, ArraySet<string>>();

}

class TaskConfig{

    constructor(runTimeConfig: RuntimeConfig){
        this.init(runTimeConfig);
        this.serviceConfigTypeArry = runTimeConfig.services;
    }

    private readonly serviceConfigTypeArry: Array<ServiceConfig>;

    private readonly configTypeSet = new Map<string, ArraySet<typeof GEObject>> ();

    private readonly typeToMethodsMap = new  TypeToMethodsMap();

    private readonly methodNameToPriority = new Map<string, number>();

    private init(runTimeConfig: RuntimeConfig): void{
        this.initTasks(runTimeConfig, TaskType.START);
        this.initTasks(runTimeConfig, TaskType.LOOP);
        this.initTasks(runTimeConfig, TaskType.END);
    }

    public get ServiceConfigTypeArry(): Array<ServiceConfig>{
        return this.serviceConfigTypeArry;
    };

    public get ConfigTypeSet(): Map<string, ArraySet< any >>{
        return this.configTypeSet;
    };

    private initTasks(runTimeConfig: RuntimeConfig, taskType: TaskType){
        const taskCfg = runTimeConfig[taskType];
        let typeSet = this.configTypeSet.get(taskType);
        if(!typeSet){
            typeSet = new ArraySet<typeof GEObject>();
            this.configTypeSet.set(taskType, typeSet);
        }
        taskCfg.map( (item: RuntimeConfigUnit, priority: number) => {
            const types = item.scope;
            const methodName = item.methodName;
            types.map( type => {
                typeSet.add(type);
                const map = this.typeToMethodsMap[taskType];
                let methodSet = map.get(type);
                if(!methodSet){
                    methodSet = new ArraySet<string>();
                    map.set(type,methodSet);
                }
                methodSet.add(methodName);
            });
            this.methodNameToPriority.set(methodName, priority);
        });
    };

    public getMethodListByInstance(GEObjectInstance: GEObject, type: TaskType): ArraySet<string>{
        const typeSet = this.typeToMethodsMap[type];
        const classList = typeSet.keys();
        const methodArraySet = new ArraySet<string>();
        for( let i = 0; i< classList.length; i++){
            if(GEObjectInstance instanceof classList[i]){
                methodArraySet.concat(typeSet.get(classList[i]));
            }
        }
        return methodArraySet;
    };

    public getPriorityByMethodName(methodName: string): number {
        return this.methodNameToPriority.get(methodName)||0;
    };
}

/***
 * 根据配置注册逐渐的回调任务.
 */
export default class TaskManager implements TaskManagerInterface{

    constructor(runTimeConfig: RuntimeConfig){
        this.taskConfig = new TaskConfig(runTimeConfig);
        this.createServiceTask();
    }


    private taskConfig: TaskConfig;

    private start: TaskFolwInterface = new TaskFlow('start_flow');

    private loop: TaskFolwInterface = new TaskFlow('loop_flow');

    private end: TaskFolwInterface = new TaskFlow('end_flow');

    private componentTaskIdsMap = new Map<string, ComponentTaskIds>();

    private serviceInstances = new Map<ServiceNameSpaces, AbstractService>();

    private createServiceTask(){
        this.taskConfig.ServiceConfigTypeArry.map( serviceConfig => {
            const {namespace, serviceClass} = serviceConfig
            const serviceInstances = new serviceClass();
            this.serviceInstances.set(namespace, serviceInstances);
            this.addTasks(serviceInstances, TaskType.START);
            this.addTasks(serviceInstances, TaskType.LOOP);
            this.addTasks(serviceInstances, TaskType.END);
        });

    };

    /**
     * 装载任务.
     */
    public addComponentTask<T extends AbstractComponent>(gameObject: GameObjectInterface,component: T): void{
        
      const startIds = this.addTasks<T>(component,TaskType.START);
      const loopIds = this.addTasks<T>(component,TaskType.LOOP);
      const endIds = this.addTasks<T>(component,TaskType.END);
      this.componentTaskIdsMap.set(`${gameObject.id}_${component.id}`, new ComponentTaskIds(startIds, loopIds, endIds));
      
    };

    get ServiceInstances() {
        return this.serviceInstances;
    }

    protected addTasks<T extends GEObjectInterface>(instance: T, taskType: TaskType): Array<string>{
        const methodList = this.taskConfig.getMethodListByInstance(instance , taskType);
        const idArry = new Array<string>();
        methodList.map( methodName => {
            const task = instance[methodName];
            if(task){
                const taskId = this[taskType].addTask(this.taskConfig.getPriorityByMethodName(methodName), task.bind(instance));
                idArry.push(taskId);
            }
        });
        return idArry;
    };

    /***
     * 移除组件所有任务.
     */
    public removeComponentAllTask(gameObject: GameObjectInterface,component: AbstractComponent): void{
        const recordId = `${gameObject.id}_${component.id}`;
        const componentTaskIds = this.componentTaskIdsMap.get(recordId);
        this.removeComponentTasks(componentTaskIds,TaskType.START);
        this.removeComponentTasks(componentTaskIds,TaskType.LOOP);
        this.removeComponentTasks(componentTaskIds,TaskType.END);
        this.componentTaskIdsMap.delete(recordId);
    };

    protected removeComponentTasks(componentTaskIds: ComponentTaskIds, taskType: TaskType): void{
        const taskIds = componentTaskIds[taskType];
        if(taskIds){
            taskIds.map( taskId => {
                this[taskType].deleteTask(taskId);
            });
        }
    };

    public removeAllStartTask(){
        this.start.clearAll();
        // const recordIdArray = this.componentTaskIdsMap.keys();
        // for(let i = 0; i< recordIdArray.length; i++){
        //     const componentTaskIds = this.componentTaskIdsMap.get(recordIdArray[i])
        //     this.removeComponentTasks(componentTaskIds, TaskType.START);
        // }
    }
    
    public runAllStartTask(): void{
        this.start.runTask();
    }

    public runAllLoopTask(): void{
        this.loop.runTask();
    }

    public runAllEndTask(): void{
        this.end.runTask();
    }
}   