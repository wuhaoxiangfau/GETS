import AbstarctComponentInterface from "./AbstarctComponentInterface";

export default interface Collision2DComponentInterface extends AbstarctComponentInterface{
    readonly CollisionType: string;
    
    readonly Width: number;

    readonly Height: number;

    readonly OffsetX: number;

    readonly OffsetY: number;

    init():void;
  
    update():void;
}