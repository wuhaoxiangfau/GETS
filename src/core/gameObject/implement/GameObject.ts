import GEObject from "../../cntroller/implements/GEObject";
import GE from '../../cntroller/implements/GE'
import AbstractComponent from "../../components/implements/AbstarctComponent";
import MutiValueMap from '../../../util/map/MutiValueMap';
import ArraySet from '../../../util/ArraySet';
import CameraInterface from "../interface/CameraInterface";
import GameObjectInterface from "../interface/GameObjectInterface";
import AbstarctComponentInterface from "../../components/interface/AbstarctComponentInterface";

export default class GameObject extends GEObject implements GameObjectInterface {

    private readonly componentMap = new MutiValueMap<typeof AbstractComponent, AbstarctComponentInterface>();

    public addComponent<T extends AbstarctComponentInterface>(component: T): T {
        component.gameObject = this;
        component.Services = GE.getServiceMap();
        // console.log('GE.getServiceMap()： ', GE.getServiceMap());
        this.componentMap.add(component.constructorFunction, component);
        GE.addComponent(this, component);
        return component;
    };

    public removeComponent(component: AbstarctComponentInterface): void {
        GE.removeComponent(this, component);

        if(!component.getAllComponents().length){
            component.gameObject = null;
        }

        this.componentMap.removeValue(component.constructorFunction, component);
    };

    public getComponents(componentType: typeof AbstractComponent): ArraySet<AbstarctComponentInterface> {
        return this.componentMap.get(componentType);
    };

    public getComponent(componentType: typeof AbstractComponent): AbstarctComponentInterface {
        return this.componentMap.get(componentType).get(0);
    };


    public getAllComponents(){
        return this.componentMap.values();
    }

    // public getService<T extends AbstractServiceInterface>(serviceClass: typeof AbstractService): T {
    //     return GE.getService(serviceClass) as T;
    // };

}