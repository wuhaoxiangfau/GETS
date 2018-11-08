import GEObject from "../../cntroller/implements/GEObject";
import GameObject from "../../gameObject/implement/GameObject";
import ArraySet from '../../../util/ArraySet';
import AbstractService from "../../services/implement/AbstractService";
import AbstarctComponentInterface from "../interface/AbstarctComponentInterface";
import { ServiceNameSpaces, ComponentNameSpace, ComponentEvents } from "../../../util/data/Enum";
import Map from '../../../util/map/Map';
import AbstractServiceInterface from "../../services/interface/AbstractServiceInterface";
import GE from "../../cntroller/implements/GE";

export default class AbstractComponent extends GEObject implements AbstarctComponentInterface {

    public gameObject: GameObject;

    private services: Map<ServiceNameSpaces, AbstractService>;

    protected nameSpace: ComponentNameSpace;

    get NameSpace() {
        return this.nameSpace;
    }

    set Services(services: Map<ServiceNameSpaces, AbstractService>) {
        this.services = services;
    };

    addComponent<T extends AbstarctComponentInterface>(component: T): T {
        return this.gameObject.addComponent(component);
    };

    removeComponent(component: AbstarctComponentInterface): void {
        return this.gameObject.removeComponent(component);
    };

    getComponents(componentNameSpace: ComponentNameSpace): ArraySet<AbstarctComponentInterface> {
        return <any>this.gameObject.getComponents(componentNameSpace);
    };

    getComponent<T extends AbstarctComponentInterface>(componentNameSpace: ComponentNameSpace): T {
        return <any>this.gameObject.getComponent(componentNameSpace);
    };

    getService<T extends AbstractServiceInterface>(namespaces: ServiceNameSpaces): T {
        return <T><any>this.services.get(namespaces);
    };

    getAllComponents(): Array<AbstarctComponentInterface> {
        return this.gameObject.getAllComponents();
    };

    publishEvent(componentEvent: ComponentEvents, ...params: Array<any>) {
        GE.publishComponentEvent(componentEvent, ...params)
    };

}