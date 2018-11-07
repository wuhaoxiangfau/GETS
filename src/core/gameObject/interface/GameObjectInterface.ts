import GEObjectInterface from "../../cntroller/interface/GEObjectInterface";
import AbstractComponent from "../../components/implements/AbstarctComponent";
import ArraySet from '../../../util/ArraySet';
import AbstarctComponentInterface from "../../components/interface/AbstarctComponentInterface";

export default interface GameObjectInterface extends GEObjectInterface {
    
    addComponent<T extends AbstarctComponentInterface>(component: T): T;

    removeComponent(component: AbstarctComponentInterface): void;

    getComponents(componentType: typeof AbstractComponent): ArraySet<AbstarctComponentInterface>;

    getComponent(componentType: typeof AbstractComponent): AbstarctComponentInterface;

    getAllComponents():Array<AbstarctComponentInterface>;

}