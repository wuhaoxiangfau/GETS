import GEObject from "../../cntroller/implements/GEObject";
import GE from '../../cntroller/implements/GE'
import AbstractComponent from "../../components/implements/AbstarctComponent";
import MutiValueMap from '../../../util/map/MutiValueMap';
import ArraySet from '../../../util/ArraySet';
import GameObjectInterface from "../interface/GameObjectInterface";
import AbstarctComponentInterface from "../../components/interface/AbstarctComponentInterface";
import { ComponentNameSpace, ComponentEvents } from "../../../util/data/Enum";

export default class GameObject extends GEObject implements GameObjectInterface {

    private readonly componentMap = new MutiValueMap<ComponentNameSpace, AbstarctComponentInterface>();

    public addComponent<T extends AbstarctComponentInterface>(component: T): T {
        component.gameObject = this;
        component.Services = GE.getServiceMap();
        // console.log('GE.getServiceMap()： ', GE.getServiceMap());
        this.componentMap.add(component.NameSpace, component);
        GE.addComponent(this, component);
        GE.publishComponentEvent(ComponentEvents.AddComponent, component);
        return component;
    };

    public removeComponent(component: AbstarctComponentInterface): void {
        GE.publishComponentEvent(ComponentEvents.RemoveComponent, component);
        GE.removeComponent(this, component);

        if(!component.getAllComponents().length){
            component.gameObject = null;
        }

        this.componentMap.removeValue(component.constructorFunction, component);
    };

    public getComponents(componentType: ComponentNameSpace): ArraySet<AbstarctComponentInterface> {
        return this.componentMap.get(componentType);
    };

    public getComponent(componentType: ComponentNameSpace): AbstarctComponentInterface {
        return this.componentMap.get(componentType).get(0);
    };


    public getAllComponents(){
        return this.componentMap.values();
    }

    // public getService<T extends AbstractServiceInterface>(serviceClass: typeof AbstractService): T {
    //     return GE.getService(serviceClass) as T;
    // };

}