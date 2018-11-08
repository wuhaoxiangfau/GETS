import GameObjectInterface from "../../gameObject/interface/GameObjectInterface";
import GEObjectInterface from "../../cntroller/interface/GEObjectInterface";
import ArraySet from '../../../util/ArraySet';
import { ServiceNameSpaces, ComponentNameSpace } from "../../../util/data/Enum";
import AbstractServiceInterface from "../../services/interface/AbstractServiceInterface";
import AbstarctComponent from "../implements/AbstarctComponent";
import Map from "../../../util/map/Map";

export default interface AbstarctComponentInterface extends GEObjectInterface {
    Services: Map<ServiceNameSpaces, AbstractServiceInterface>;
    gameObject: GameObjectInterface;
    readonly NameSpace: ComponentNameSpace;

    getAllComponents(): Array<AbstarctComponentInterface>;


    addComponent<T extends AbstarctComponentInterface>(component: T): T;

    removeComponent(component: AbstarctComponentInterface): void;

    getComponents(componentType: ComponentNameSpace): ArraySet<AbstarctComponentInterface>;

    getComponent<T extends AbstarctComponentInterface>(componentType: ComponentNameSpace): T;

    
    getService< T extends AbstractServiceInterface>(namespaces: ServiceNameSpaces): T;

    getAllComponents():Array<AbstarctComponentInterface>;

}