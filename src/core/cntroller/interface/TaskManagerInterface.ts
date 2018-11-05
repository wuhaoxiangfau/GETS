import {ServiceNameSpaces} from '../../../config/RuntimeConfig';
import AbstractService from '../../services/implement/AbstractService';
import AbstractComponent from '../../components/implements/AbstarctComponent';
import GameObject from '../../gameObject/implement/GameObject';
import Map from '../../../util/map/Map';

export default interface TaskManagerInterface{
    addComponentTask<T extends AbstractComponent>(gameObject: GameObject,component: T): void;
  
    ServiceInstances :Map<ServiceNameSpaces, AbstractService>;
  
      /***
       * 移除组件所有任务.
       */
    removeComponentAllTask(gameObject: GameObject,component: AbstractComponent): void;
  
    removeAllStartTask():void;
      
    runAllStartTask(): void;
  
    runAllLoopTask(): void;
  
    runAllEndTask(): void;


}