import AbstractService from "./AbstractService";
import Render2DServiceInterface from "../interface/Render2DServiceInterface";
import GE from "../../cntroller/implements/GE";
import CameraComponentInterface from "../../components/interface/Camera2DComponentInterface";
import { ServiceNameSpaces } from "../../../util/data/Enum";
import Camera2DService from "./Camera2DService";
import Camera2DServiceInterface from "../interface/Camera2DServiceInterface";

export default class Render2DService extends AbstractService implements Render2DServiceInterface{

    constructor(){
        super();
       
    }

    private maiCanvas: HTMLCanvasElement;
    private mainContext: CanvasRenderingContext2D;

    private tempCanvas: HTMLCanvasElement;
    private tempContext: CanvasRenderingContext2D;

    private isDirty = true;

    private cameraService: Camera2DServiceInterface;

    public init(){
       this.cameraService = <Camera2DServiceInterface>this.getService(ServiceNameSpaces.Camera2D);
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
        canavs.width = this.cameraService.MainCamera.Width;
        canavs.height = this.cameraService.MainCamera.Height;
        return {
            canavs,
            context: canavs.getContext('2d'),
        };
    }
    //TODO
    render(canvas: HTMLCanvasElement, x:number, y: number){

        // const cameraPosition = this.mainCamera.getPosition()
        // this.tempContext.drawImage(canvas, x - cameraPosition.X, y - cameraPosition.Y, canvas.width, canvas.height);
        this.isDirty = true;
    };

   

    update(){
        
            const mainCamera = this.cameraService.MainCamera; 
            if(mainCamera.IsDirty){
                const screenPosition = mainCamera.getScreenPosition();
                const mainCanvas = mainCamera.Canvas;
                this.mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
                this.mainContext.drawImage(mainCanvas, screenPosition.X, screenPosition.Y, mainCanvas.width, mainCanvas.height);
                mainCamera.clear();
            }
          
        // if(this.isDirty){
        //     this.mainContext.clearRect(0, 0, this.maiCanvas.width, this.maiCanvas.height);
        //     this.mainContext.drawImage(this.tempCanvas, 0, 0, this.tempCanvas.width, this.tempCanvas.height);
        //     this.tempContext.clearRect(0,0, this.tempCanvas.width, this.tempCanvas.height);
        //     this.isDirty = false;
        // }
    };
    
}