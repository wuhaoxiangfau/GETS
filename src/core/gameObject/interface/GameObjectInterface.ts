import GEObjectInterface from "../../cntroller/interface/GeObjectInterface";
import AbstractComponent from "../../components/implements/AbstarctComponent";
import ArraySet from '../../../util/ArraySet';
import CameraInterface from "./CameraInterface";
import AbstarctComponentInterface from "../../components/interface/AbstarctComponentInterface";

export default interface GameObjectInterface extends GEObjectInterface {
    
    addComponent<T extends AbstractComponent>(component: T): T;

    removeComponent(component: AbstractComponent): void;

    getComponents(componentType: typeof AbstractComponent): ArraySet<AbstractComponent>;

    getComponent(componentType: typeof AbstractComponent): AbstractComponent;

    getAllComponents():Array<AbstarctComponentInterface>;

    getMainCamera():CameraInterface;
}