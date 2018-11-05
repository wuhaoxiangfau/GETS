import GameObject from "./GameObject";
import Camera2DInterface from "../interface/CameraInterface";
import Vector2D from "../../../util/data/Vector2D";
import Position2DComponents from "../../components/implements/Position2DComponents";

export default class Camera2D extends GameObject implements Camera2DInterface{

    constructor(){
        super();
        this.position2DComponents = this.addComponent(new Position2DComponents());
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }
    
    private position2DComponents: Position2DComponents;

    private width: number;

    private height: number;

    get Width(){
        return this.width;
    }

    get Height(){
        return this.height;
    }

    getPosition():Vector2D{
        return new Vector2D(this.position2DComponents.X, this.position2DComponents.Y);
    }
}