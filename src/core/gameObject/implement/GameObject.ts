import GEObject from "../../cntroller/implements/GEObject";
import GE from '../../cntroller/GE'
import AbstractComponent from "../../components/implements/AbstarctComponent";
import MutiValueMap from '../../../util/map/MutiValueMap';
import ArraySet from '../../../util/ArraySet';
import CameraInterface from "../interface/CameraInterface";
import GameObjectInterface from "../interface/GameObjectInterface";

export default class GameObject extends GEObject implements GameObjectInterface {

    private readonly componentMap = new MutiValueMap<typeof AbstractComponent, AbstractComponent>();

    public addComponent<T extends AbstractComponent>(component: T): T {
        component.gameObject = this;
        component.Services = GE.getServiceMap();
        // console.log('GE.getServiceMap()： ', GE.getServiceMap());
        this.componentMap.add(component.constructorFunction, component);
        GE.addComponent(this, component);
        return component;
    };

    public removeComponent(component: AbstractComponent): void {
        component.gameObject = null;
        GE.removeComponent(this, component);
        this.componentMap.removeValue(component.constructorFunction, component);
    };

    public getComponents(componentType: typeof AbstractComponent): ArraySet<AbstractComponent> {
        return this.componentMap.get(componentType);
    };

    public getComponent(componentType: typeof AbstractComponent): AbstractComponent {
        return this.componentMap.get(componentType).get(0);
    };

    public getMainCamera():CameraInterface{
        
        return GE.getMainCamera();
    }

    public setCamera(camera: CameraInterface){
        GE.setMainCamera(camera);
    }

    public getAllComponents(){
        return this.componentMap.values();
    }

    // public getService<T extends AbstractServiceInterface>(serviceClass: typeof AbstractService): T {
    //     return GE.getService(serviceClass) as T;
    // };

}