import AbstractService from "./AbstractService";
import Render2DServiceInterface from "../interface/Render2DServiceInterface";
import Camera2D from "../../gameObject/implement/Camera2D";
import GE, { GEEvents } from "../../cntroller/GE";

export default class Render2DService extends AbstractService implements Render2DServiceInterface{

    constructor(){
        super();
       
    }

    private maiCanvas: HTMLCanvasElement;
    private mainContext: CanvasRenderingContext2D;

    private tempCanvas: HTMLCanvasElement;
    private tempContext: CanvasRenderingContext2D;

    private isDirty = true;

    private mainCamera: Camera2D;

    public init(){
        this.mainCamera = <Camera2D>this.getMainCamera();
        this.initCanvas();
    };

    private initCanvas(){

        document.body.style.margin='0 0';
        const mainCanvas = this.getCanvas();
        if(!this.maiCanvas){
            this.maiCanvas = mainCanvas.canavs;
            this.mainContext = mainCanvas.context;
            this.maiCanvas.style.background = 'black';
            document.body.appendChild(this.maiCanvas);

            
            const tempCanvas = this.getCanvas();
            this.tempContext = tempCanvas.context;
            this.tempCanvas = tempCanvas.canavs;
        }
    };

   

    private getCanvas():{canavs: HTMLCanvasElement, context: CanvasRenderingContext2D}{
        
        const canavs = document.createElement('canvas');
        canavs.width = this.mainCamera.Width;
        canavs.height = this.mainCamera.Height;
        return {
            canavs,
            context: canavs.getContext('2d'),
        };
    }

    render(canvas: HTMLCanvasElement, x:number, y: number){

        const cameraPosition = this.mainCamera.getPosition()
        this.tempContext.drawImage(canvas, x - cameraPosition.X, y - cameraPosition.Y, canvas.width, canvas.height);
        this.isDirty = true;
    };

   

    update(){
       
        if(this.isDirty){
            this.mainContext.clearRect(0, 0, this.maiCanvas.width, this.maiCanvas.height);
            this.mainContext.drawImage(this.tempCanvas, 0, 0, this.tempCanvas.width, this.tempCanvas.height);
            this.tempContext.clearRect(0,0, this.tempCanvas.width, this.tempCanvas.height);
            this.isDirty = false;
        }
    };
    
}