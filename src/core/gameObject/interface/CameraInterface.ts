import GameObjectInterface from "./GameObjectInterface";
import Vector2D from '../../../util/data/Vector2D';

export default interface CameraInterface extends GameObjectInterface{

    getPosition(): Vector2D;

    readonly Width: number;

    readonly Height: number
}