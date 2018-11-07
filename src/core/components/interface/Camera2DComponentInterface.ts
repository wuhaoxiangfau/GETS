import AbstarctComponentInterface from "./AbstarctComponentInterface";
import Vector2D from "../../../util/data/Vector2D";

export default interface CameraComponentInterface extends AbstarctComponentInterface {
    /**
     * 摄像机屏幕的宽.
     * */
    readonly Width:number;
    
    /**
     * 摄像机屏幕的高.
     */
    readonly Height: number;

    /**
     * 摄像机的在世界坐标.
     */
    getPosition():Vector2D;

    /**
     * 摄像机成像的屏幕坐标.
     */
    getScreenPosition():Vector2D;

}