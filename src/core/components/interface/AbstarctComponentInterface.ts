import GameObjectInterface from "../../gameObject/interface/GameObjectInterface";
import GEObjectInterface from "../../cntroller/interface/GEObjectInterface";
import ArraySet from '../../../util/ArraySet';
import { ServiceNameSpaces } from "../../../config/RuntimeConfig";
import AbstractServiceInterface from "../../services/interface/AbstractServiceInterface";
import AbstarctComponent from "../implements/AbstarctComponent";
import Map from "../../../util/map/Map";

export default interface AbstarctComponentInterface extends GEObjectInterface {
    Services: Map<ServiceNameSpaces, AbstractServiceInterface>;
    gameObject: GameObjectInterface;

    getAllComponents(): Array<AbstarctComponentInterface>;


    addComponent<T extends AbstarctComponentInterface>(component: T): T;

    removeComponent(component: AbstarctComponentInterface): void;

    getComponents(componentType: typeof AbstarctComponent): ArraySet<AbstarctComponentInterface>;

    getComponent<T extends AbstarctComponentInterface>(componentType: typeof AbstarctComponent): T;

    
    getService< T extends AbstractServiceInterface>(namespaces: ServiceNameSpaces): T;

    getAllComponents():Array<AbstarctComponentInterface>;

}