import GEObject from "../../cntroller/implements/GEObject";
import GameObject from "../../gameObject/implement/GameObject";
import ArraySet from '../../../util/ArraySet';
import AbstractService from "../../services/implement/AbstractService";
import AbstarctComponentInterface from "../interface/AbstarctComponentInterface";
import { ServiceNameSpaces } from "../../../config/RuntimeConfig";
import Map from '../../../util/map/Map';
import AbstractServiceInterface from "../../services/interface/AbstractServiceInterface";
import CameraInterface from "../../gameObject/interface/CameraInterface";

export default class AbstractComponent extends GEObject implements AbstarctComponentInterface{
    
    public gameObject: GameObject;

    private services: Map<ServiceNameSpaces,  AbstractService>;
    
    set Services(services: Map<ServiceNameSpaces,  AbstractService>) {
        this.services = services;
   };

    protected addComponent<T extends AbstractComponent>(component: T): T {
        return this.gameObject.addComponent(component);
    };

    protected removeComponent(component: AbstractComponent): void {
       return this.gameObject.removeComponent(component);
    };

    protected getComponents(componentType: typeof AbstractComponent): ArraySet<AbstarctComponentInterface> {
        return <any>this.gameObject.getComponents(componentType);
    };

    protected getComponent<T extends AbstarctComponentInterface>(componentType: typeof AbstractComponent): T {
        return <any>this.gameObject.getComponent(componentType);
    };

    
    protected getService< T extends AbstractServiceInterface>(namespaces: ServiceNameSpaces): T {
        return <T><any>this.services.get(namespaces);
    };

    protected getMainCamera():CameraInterface{
        return this.gameObject.getMainCamera();
    }

    public getAllComponents():Array<AbstarctComponentInterface>{
        return this.gameObject.getAllComponents();
    }

}