import Map from '../../../util/map/Map';
import TaskFolwInterface from '../interface/TaskFlowInterface';
class TaskRecord {

    constructor(priority: number, task: Function){
        this.priority = priority;
        this.task = task;
    }
    public priority: number;
    public task: Function;
}

export class TaskFlow implements TaskFolwInterface{


    constructor(flowName: string){

        this.flowName = flowName;
    }

    private flowName: string = 'default';

    private taskId: number = 1;

    private idTaskMap: Map<string, TaskRecord> = new Map<string, TaskRecord>();

    private tasks: Array<Array<Function>> = new Array<Array<Function>>();


     /**
     * 
     *按照优先级制作task. 
     * @param priority 优先级 > 0.
     * @param task 执行的方法.
     * @returns 任务的ID.
     */
    public addTask (priority: number, task: Function): string{

        let taskArray = this.tasks[priority];

        if(!taskArray){
            taskArray = new Array<Function>();
            this.tasks[priority] = taskArray;
        }
        const taskId =  `${this.flowName}_${this.taskId++}`;
        this.idTaskMap.set(taskId, new TaskRecord(priority, task));
        taskArray.push(task);
        return taskId;
    }

    /**
     * 总任务队列中删除任务.
     * @param taskId 被删除的任务的 taskId.
     */
    public deleteTask (taskId:string): void{
        const taskRecord = this.idTaskMap.get(taskId);
        if(taskRecord){
            const taskArray: Array<Function>  = this.tasks[taskRecord.priority];
            if(taskArray){
                const taskInd: number = taskArray.indexOf(taskRecord.task);
                if(taskInd > -1){
                    taskArray.splice(taskInd, 1);
                    this.idTaskMap.delete(taskId);
                }
            }
        }
    }

    /**
     * 按照优先级执行task.
     */
    public runTask(): void{
        for( let currentPriority = 0; currentPriority < this.tasks.length; currentPriority++){
            const taskArry = this.tasks[currentPriority]||[];
            for(let taskInd = 0; taskInd < taskArry.length; taskInd++){
                try{
                    taskArry[taskInd]();
                }catch(e){
                    console.error(e);
                }
            }
        }
    };


    public clearAll(): void {

        this.idTaskMap = new Map<string, TaskRecord>();

        this.tasks = new Array<Array<Function>>();
    }
       
}
