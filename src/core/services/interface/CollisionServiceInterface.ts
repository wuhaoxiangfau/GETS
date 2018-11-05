import AbstractServiceInterface from "./AbstractServiceInterface";
import Vector2D from "../../../util/data/Vector2D";
import Collision2DComponentInterface from "../../components/interface/Collision2DComponentInterface";

export class ImpactInstanceInfo {

    constructor(gameObjectId: number, position: Vector2D){
        this.gameObjectId = gameObjectId;
        this.position = position;
    }
    
    private gameObjectId: number;

    private position: Vector2D;

    get GameObjectId(){

        return this.gameObjectId;
    };

    get Position(){

        return this.position;
    };

}

export class MotionInfo {

    constructor(position: Vector2D, oldPosition: Vector2D){
        this.position = position;
        this.oldPosition = oldPosition;
    }

    private position: Vector2D;
    private oldPosition: Vector2D;

    get Position(){
        return this.position;
    }

    get OldPosition(){
        return this.oldPosition;
    }
}

export class ImpactInfo {

    constructor(self: ImpactInstanceInfo, other: ImpactInstanceInfo){
        this.self = self;
        this.other = other;
    }

    private self: ImpactInstanceInfo;

    private other: ImpactInstanceInfo;

    get Self(){
        return this.self;
    }

    get Other(){
        return this.other;
    }
    
};

export class ImpackTask {
    constructor(onHit: Function, onLeave:Function){
        this.onHit = onHit;
        this.onLeave = onLeave;
    }
    
    private onHit:Function;
    private onLeave:Function;

    get OnHit(){
        return this.onHit;
    }

    get OnLeave(){
        return this.onLeave;
    }
}

export default interface CollisionServiceInterface extends AbstractServiceInterface {

    updateCollisionInfo( collision: Collision2DComponentInterface, motionInfo: MotionInfo ): void;

};