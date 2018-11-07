import AbstractComponent from "./AbstarctComponent";
import InputServiceInterface, { KeyBoard } from "../../services/interface/InputServiceInterface";
import { ServiceNameSpaces } from "../../../config/RuntimeConfig";
import Position2DComponentsInterface from "../interface/Position2DComponentsInterface";
import Position2DComponents from "./Position2DComponents";
import TimerInterface from "../../services/interface/TimerInterface";
import Camera2D from "../../gameObject/implement/Camera2D";
import CameraInterface from "../../gameObject/interface/CameraInterface";

export default class MoveComponent extends AbstractComponent{

    constructor(){
        super();
        
    }
    
    private input:InputServiceInterface;

    private positionComp: Position2DComponentsInterface;

    private timer: TimerInterface;

    private speed = 100;

    private mainCamera: CameraInterface;

    get Speed(){
        return this.speed;
    }

    set Speed(speed: number){
        this.speed = speed;
    }

    awake(){
        this.input = this.getService(ServiceNameSpaces.InputService);
        this.positionComp = this.getComponent(Position2DComponents);
        this.timer = this.getService(ServiceNameSpaces.Timer);
    }

    update(){
        // console.log(this.input.isKeyDown(KeyBoard.DOWN));
        // console.log(this.input.isKeyDown(KeyBoard.UP));
        // console.log(this.input.isKeyDown(KeyBoard.RIGHT));
        // console.log(this.input.isKeyDown(KeyBoard.LEFT));
        if(this.input.isKeyDown(KeyBoard.a)|| this.input.isKeyDown(KeyBoard.A)){

            this.positionComp.X -= this.timer.DealTime * this.speed;
        }else if(this.input.isKeyDown(KeyBoard.d)|| this.input.isKeyDown(KeyBoard.D)){

            this.positionComp.X += this.timer.DealTime * this.speed;
        }else if(this.input.isKeyDown(KeyBoard.W)|| this.input.isKeyDown(KeyBoard.w)){

            this.positionComp.Y -= this.timer.DealTime * this.speed;
        }else if(this.input.isKeyDown(KeyBoard.s)|| this.input.isKeyDown(KeyBoard.S)){

            this.positionComp.Y += this.timer.DealTime * this.speed;
        }


    }
}