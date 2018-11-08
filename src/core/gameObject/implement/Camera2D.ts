import GameObject from "./GameObject";
import Vector2D from "../../../util/data/Vector2D";
import Position2DComponents from "../../components/implements/Position2DComponents";
import Camera2DComponent from "../../components/implements/Camera2DComponent";

export default class Camera2D extends GameObject {

    constructor(){
        super();
       this.addComponent(new Position2DComponents());
       this.addComponent(new Camera2DComponent());
    }
    
}