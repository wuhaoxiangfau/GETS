import AbstarctComponentInterface from '../../components/interface/AbstarctComponentInterface';
import TaskManagerInterface from './TaskManagerInterface';
import {GEEvents} from './GEInterfece';


/**
 * 管理Component与Task之间的关系.
 */
export default interface ComponentManagerInterface {

    readonly TaskManager: TaskManagerInterface;

    addComponentTasks(component: AbstarctComponentInterface):void;

    removeComponentTasks(component: AbstarctComponentInterface):void;

    addEventListener(eventName: GEEvents, fun:Function): void;

    removeEventListener(eventName: GEEvents, fun: Function): void;


}