import AbstarctComponentInterface from "./AbstarctComponentInterface";
import Vector2D from "../../../util/data/Vector2D";

export default interface Camera2DComponentInterface extends AbstarctComponentInterface {
    /**
     * 摄像机屏幕的宽.
     * */
    readonly Width:number;
    
    /**
     * 摄像机屏幕的高.
     */
    readonly Height: number;

    /**
     * 渲染在屏幕上的优先级.
     */
    readonly Layer: number;

    /**
     * 摄像机的内容是否发生变化.
     */
    readonly IsDirty: boolean;

    /**
     * 自己的离线渲染画布.
     */
    readonly Canvas:HTMLCanvasElement;


    /**
     * 摄像机的在世界坐标.
     */
    getPosition():Vector2D;

    /**
     * 摄像机的内容在的屏幕坐标.
     */
    getScreenPosition():Vector2D;

    render(canvas:HTMLCanvasElement|HTMLImageElement,x:number, y:number):void;

    /**
     * 清空摄像机内容.
     */
    clear():void;
}