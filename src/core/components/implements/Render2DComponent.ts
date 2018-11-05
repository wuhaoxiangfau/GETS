import AbstractComponent from "./AbstarctComponent";
import { ServiceNameSpaces } from "../../../config/RuntimeConfig";
import Render2DServiceInterface from "../../services/interface/Render2DServiceInterface";
import Position2DComponentsInterface from "../interface/Position2DComponentsInterface";
import Position2DComponents from "./Position2DComponents";
import Render2DComponentInterface from "../interface/Render2DComponentInterface";

export class RectCanvas {
    constructor(width: number, height: number, color: string){
        this.canvas.width = width;
        this.canvas.height = height;
        this.fillColor(this.canvas, color);
    }

    private fillColor(canvas:HTMLCanvasElement, color: string){
        const context = canvas.getContext('2d');
        context.fillStyle = color;
        context.fillRect(0,0, canvas.width, canvas.height);
    }

    private canvas:HTMLCanvasElement = document.createElement('canvas');

    get Canvas(){
        return this.canvas;
    }
}

export default class Render2DComponent extends AbstractComponent implements Render2DComponentInterface {

    constructor(image?: HTMLImageElement|HTMLCanvasElement){
        super();
        this.canvas = document.createElement('canvas');
        this.imageResource = image;
    }

    private renderService: Render2DServiceInterface;

    private positionComp: Position2DComponentsInterface;

    private canvas: HTMLCanvasElement;

    private imageResource: HTMLImageElement|HTMLCanvasElement;

    private isDirty = true;

    get ImageResource(){
        return this.imageResource;
    }

    set ImageResource(imageResource){
        this.imageResource = imageResource;
        this.isDirty = true;
    }

    awake(){

        this.renderService =  this.getService(ServiceNameSpaces.Render2DService);
        this.positionComp = <Position2DComponents>this.getComponent(Position2DComponents);
        const context = this.canvas.getContext('2d');
        context.drawImage(this.imageResource, 0, 0);

    }
    
    start(){

        this.renderService.render(this.canvas, this.positionComp.X, this.positionComp.Y);
    };

    render(){

        if(this.positionComp.IsDirty || this.isDirty){
            
            this.renderService.render(this.canvas, this.positionComp.X, this.positionComp.Y);
            this.isDirty = false;
        }
    };

    destroy(){
        console.log('destroy...');
    }

    destroyed(){
        console.log('destroyed...');
    }
}

