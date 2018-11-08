import AbstractComponent from "./AbstarctComponent";
import Camera2DComponentInterface from "../interface/Camera2DComponentInterface";
import Position2DComponentsInterface from "../interface/Position2DComponentsInterface";
import { ComponentNameSpace } from "../../../util/data/Enum";
import Vector2D from "../../../util/data/Vector2D";

export default class Camera2DComponent extends AbstractComponent implements Camera2DComponentInterface{

    constructor(layer?:number,width?:number, height?:number, screenX?:number, screenY?:number){
        super();
        this.nameSpace = ComponentNameSpace.Camera2DComponent;
        this.layer = layer || 0;
        this.width = width || window.innerWidth;
        this.height = height || window.innerHeight;
        this.screenX = screenX || 0;
        this.screenY = screenY || 0;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');
    }
    private width = 0;
    private height = 0;
    private layer = 0;
    private canvas = document.createElement('canvas');
    private context: CanvasRenderingContext2D;
    private position: Position2DComponentsInterface;
    private screenX = 0;
    private screenY = 0;
    private isDirty = true; 
    get Width(){
        return this.width;
    }

    get Height(){
        return this.height;
    }

    get Layer (){
        return this.layer;
    }

    get Canvas (){
        return this.canvas;
    }

    get Context (){
        return this.context;
    }
 
    get IsDirty (){
        return this.isDirty || this.position.IsDirty;
    }

    awake(){
        this.position = this.getComponent(ComponentNameSpace.Position2DComponents);
    }

    getPosition(){
        return new Vector2D(this.position.X, this.position.Y);
    }

    getScreenPosition(){
        return new Vector2D(this.screenX, this.screenY);
    }

    render(canvas:HTMLCanvasElement,x:number,y:number){
        this.context.drawImage(canvas, x-this.position.X, y-this.position.Y);
        this.isDirty = true;
    }

    clear(){
        this.context.clearRect(0,0,this.width,this.height);
        this.isDirty = false;
    }
}