import AbstractService from "../core/services/implement/AbstractService";
import AbstractComponent from "../core/components/implements/AbstarctComponent";
import Timer from '../core/services/implement/Timer'
import  GEObject from '../core/cntroller/implements/GEObject';
import InputService from "../core/services/implement/InputService";
import Render2DService from "../core/services/implement/Render2DService";
import Position2DComponents from "../core/components/implements/Position2DComponents";
import { ResourceLoader } from "../core/services/implement/ResourceLoader";
import Render2DComponent from "../core/components/implements/Render2DComponent";
import { CollisionService } from "../core/services/implement/CollisionService";
import Camera2DService from "../core/services/implement/Camera2DService";
import { ServiceNameSpaces } from "../util/data/Enum";

export interface RuntimeConfigUnit {
    methodName: string;
    scope: Array<typeof GEObject>;
}
export interface RuntimeConfig {
    services:  Array< ServiceConfig >;
    start: Array<RuntimeConfigUnit>;
    loop: Array<RuntimeConfigUnit>;
    end: Array<RuntimeConfigUnit>;
}

export interface ServiceConfig {
    namespace: ServiceNameSpaces;
    serviceClass: typeof AbstractService;
}



/**
 * 定义各个阶段的回调函数.与作用的类型.
 */
export default {
    services: [ 
        
        { 
            namespace: ServiceNameSpaces.Timer , 
            serviceClass: Timer 
        }, 
        { 
            namespace: ServiceNameSpaces.InputService,
            serviceClass: InputService,
        }, 
        { 
            namespace: ServiceNameSpaces.Render2DService,
            serviceClass: Render2DService,
        }, 
        { 
            namespace: ServiceNameSpaces.ResourceLoader,
            serviceClass: ResourceLoader,
        }, 
        { 
            namespace: ServiceNameSpaces.Collision,
            serviceClass: CollisionService,
        }, 
        { 
            namespace: ServiceNameSpaces.Camera2D,
            serviceClass: Camera2DService,
        }, 
    ],
    
    start: [
        
        {
            methodName: 'awake',
            scope: [ AbstractComponent ],
        },
        {
            methodName: 'init',
            scope: [ AbstractService ],
        },
        {
            methodName: 'start',
            scope: [ AbstractComponent ],
        },

    ],
    loop: [

        {
            methodName: 'willUpdate',
            scope: [ AbstractComponent, AbstractService],
        },
        {
            methodName: 'update',
            scope: [ AbstractService, AbstractComponent ],
        },
        {
            methodName: 'render',
            scope: [ Render2DComponent ],
        },
        {
            methodName: 'updated',
            scope: [ AbstractComponent, AbstractService ],
        },
        {
            methodName: 'afterUpdated',
            scope: [ Position2DComponents ],
        },
    ],
    end: [
        {
            methodName: 'destroy',
            scope: [ AbstractComponent ],
        },
        {
            methodName: 'destroyed',
            scope: [ AbstractComponent ],
        },
    ],
};
