import AbstractComponent from "../../components/implements/AbstarctComponent";
import GameObject from "../../gameObject/implement/GameObject";
import TaskManager from "./TaskManager";
import runTimeConfig, { ServiceNameSpaces } from '../../../config/RuntimeConfig';
import AbstractService from "../../services/implement/AbstractService";
import Map from '../../../util/map/Map';
import CameraInterface from "../../gameObject/interface/CameraInterface";
import EventEmitor from "../../../util/event/EventEmitor";
import GameObjectInterface from "../../gameObject/interface/GameObjectInterface";
import AbstractServiceInterface from "../../services/interface/AbstractServiceInterface";
import AbstarctComponentInterface from "../../components/interface/AbstarctComponentInterface";
import { GEEvents } from '../interface/GEInterfece';


/**
 * 根据配置调度各个组件与服务的方法.
 */
export default class GE {

    private static isPause = false;
    private static hasNewComponent = true;
    private static taskManager:TaskManager;
    private static  mainCamera: CameraInterface;
    private static eventEmitor: EventEmitor = new EventEmitor();

    public static init(){
        this.taskManager = new TaskManager(runTimeConfig);
        this.init = ()=> {
            throw 'init complete!';
        }
    }

    public static addEventListener(GEEvent: GEEvents, fun:Function){
        this.eventEmitor.addEventListener(GEEvent, fun);
    };

    public static removeEventListener(GEEvent:GEEvents, fun:Function){
        this.eventEmitor.removeEventListener(GEEvent,fun);
    }

  

    public static setMainCamera(camera: CameraInterface){
        this.mainCamera = camera;
        this.eventEmitor.emit(GEEvents.SetMainCamera);
    }

    private static run() {
        console.time('GE RUN');
        if(this.hasNewComponent){
            this.taskManager.runAllStartTask();
            this.taskManager.removeAllStartTask();
            this.hasNewComponent = false;
            
        }
        this.taskManager.runAllLoopTask();
        console.timeEnd('GE RUN');
        window.requestAnimationFrame(() => {
            this.run();
        });
    };

    public static getServiceMap (): Map<ServiceNameSpaces, AbstractServiceInterface>{
        return this.taskManager.ServiceInstances;
    }

    private static tempRun() {

    };

    public static pause() {
        this.tempRun = this.run;
        this.run = () => { };
        this.isPause = true;
    };

    public static start() {
        if (this.isPause) {
            this.isPause = false;
            this.run = this.tempRun;
        }
        this.run();
    }

    public static addComponent<T extends AbstarctComponentInterface>(gemeObject: GameObjectInterface, component: T): void {
        this.hasNewComponent = true;
        this.taskManager.addComponentTask<T>(gemeObject, component);
        this.eventEmitor.emit(GEEvents.AddComponent, component);
    };

    public static removeComponent(gemeObject: GameObjectInterface, component: AbstarctComponentInterface) {
        this.taskManager.removeComponentAllTask(gemeObject, component);
        this.eventEmitor.emit(GEEvents.RemoveComponent, component);
    };

    //TODO
    public static destoryGameObject(gemeObject: GameObjectInterface){

    }
}

