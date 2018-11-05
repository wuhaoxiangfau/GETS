import AbstractServiceInterface from "./AbstractServiceInterface";

export default interface Render2DServiceInterface extends AbstractServiceInterface{ 

    render(canvas: HTMLCanvasElement, x:number, y:number):void;
    
    init():void;

}