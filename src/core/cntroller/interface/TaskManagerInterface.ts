import {ServiceNameSpaces} from '../../../config/RuntimeConfig';
import Map from '../../../util/map/Map';
import AbstarctComponentInterface from '../../components/interface/AbstarctComponentInterface';
import GameObjectInterface from '../../gameObject/interface/GameObjectInterface';
import AbstractServiceInterface from '../../services/interface/AbstractServiceInterface';

export default interface TaskManagerInterface{
    addComponentTask<T extends AbstarctComponentInterface>(gameObject: GameObjectInterface,component: T): void;
  
    readonly ServiceInstances :Map<ServiceNameSpaces, AbstractServiceInterface>;
  
      /***
       * 移除组件所有任务.
       */
    removeComponentAllTask(gameObject: GameObjectInterface,component: AbstarctComponentInterface): void;
  
    removeAllStartTask():void;
      
    runAllStartTask(): void;
  
    runAllLoopTask(): void;
  
    runAllEndTask(): void;


}