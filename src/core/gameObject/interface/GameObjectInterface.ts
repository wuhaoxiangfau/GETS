import GEObjectInterface from "../../cntroller/interface/GEObjectInterface";
import AbstractComponent from "../../components/implements/AbstarctComponent";
import ArraySet from '../../../util/ArraySet';
import AbstarctComponentInterface from "../../components/interface/AbstarctComponentInterface";
import { ComponentNameSpace } from "../../../util/data/Enum";

export default interface GameObjectInterface extends GEObjectInterface {
    
    addComponent<T extends AbstarctComponentInterface>(component: T): T;

    removeComponent(component: AbstarctComponentInterface): void;

    getComponents(componentType: ComponentNameSpace): ArraySet<AbstarctComponentInterface>;

    getComponent(componentType: ComponentNameSpace): AbstarctComponentInterface;

    getAllComponents():Array<AbstarctComponentInterface>;

}