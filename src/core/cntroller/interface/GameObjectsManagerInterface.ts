import GameObjectInterface from '../../gameObject/interface/GameObjectInterface';
import TaskManagerInterface from './TaskManagerInterface';
import AbstarctComponentInterface from '../../components/interface/AbstarctComponentInterface';
import {GEEvents} from './GEInterfece';
/**
 * GE直接与GmeObjectManagerInterface对接.
 * 管理GameObjec与Component之间的关系.
 */
export default interface GameObjectsManagerInterface {

    addGameObjectTasks(gameObject: GameObjectInterface):void;

    removeGameObjectTask(gameObject: GameObjectInterface):void;

    getGameObjectById(gameObjectId: number):GameObjectInterface;

    getComponentById(componentId: number):AbstarctComponentInterface;

    addEventListener(eventName: GEEvents, fun:Function): void;

    removeEventListener(eventName: GEEvents, fun: Function): void;

    readonly TaskManager: TaskManagerInterface;
}