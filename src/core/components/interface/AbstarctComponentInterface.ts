import GameObjectInterface from "../../gameObject/interface/GameObjectInterface";
import GEObjectInterface from "../../cntroller/interface/GEObjectInterface";

export default interface AbstarctComponentInterface extends GEObjectInterface {
    
    gameObject: GameObjectInterface;

    getAllComponents(): Array<AbstarctComponentInterface>;
    
}