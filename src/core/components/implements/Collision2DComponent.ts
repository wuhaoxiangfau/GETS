import AbstractComponent from "./AbstarctComponent";
import Collision2DComponentInterface from "../interface/Collision2DComponentInterface";
import CollisionServiceInterface, { ImpactInfo, MotionInfo } from "../../services/interface/CollisionServiceInterface";
import { ServiceNameSpaces } from "../../../config/RuntimeConfig";
import Position2DComponentsInterface from "../interface/Position2DComponentsInterface";
import Position2DComponents from "./Position2DComponents";
import Vector2D from "../../../util/data/Vector2D";

export default class Collision2DComponent extends AbstractComponent implements Collision2DComponentInterface {
    
    constructor(width:number, height:number, offsetX:number, offsetY: number, collisionType: string){
        super();
        this.width = width || 0;
        this.height = height || 0;
        this.offsetX = offsetX || 0;
        this.offsetY = offsetY || 0;
        this.collisionType = collisionType;
    };

    private width:number;

    private height:number;

    private offsetX: number;

    private offsetY: number;

    private collisionService: CollisionServiceInterface;

    private positionComp: Position2DComponentsInterface;

    private collisionType: string;

    get CollisionType(){
        return this.collisionType;
    }

    get Width(){
        return this.width;
    }

    get Height(){
        return this.height;
    }

    get OffsetX(){
        return this.offsetX;
    }

    get OffsetY(){
        return this.offsetY;
    }

    init(){
        this.collisionService = this.getService(ServiceNameSpaces.Collision);
        this.positionComp = this.getComponent(Position2DComponents);
    }


    update(){
        const oldPostion = new Vector2D(this.positionComp.OldX, this.positionComp.OldY);
        const position = new Vector2D(this.positionComp.X, this.positionComp.Y);
        // this.collisionService.updateCollisionInfo(this, new MotionInfo(position, oldPostion), this.onHite)
    }

}