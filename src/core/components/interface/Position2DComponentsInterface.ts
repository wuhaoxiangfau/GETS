import AbstarctComponentInterface from "./AbstarctComponentInterface";

export default interface Position2DComponentsInterface extends AbstarctComponentInterface {
    
    X: number;

    Y: number;

    readonly OldX: number;

    readonly OldY: number;
    
    Rotation: number;

    readonly IsDirty: boolean;

    readonly afterUpdated: Function;

}