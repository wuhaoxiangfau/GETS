import AbstractService from "./AbstractService";
import Camera2DServiceInterface from "../interface/Camera2DServiceInterface";
import CameraComponentInterface from "../../components/interface/Camera2DComponentInterface";
import ArraySet from "../../../util/ArraySet";
import GE from "../../cntroller/implements/GE";
import { ComponentEvents, ComponentNameSpace } from "../../../util/data/Enum";

/**
 * 离线渲染.
 */
export default class Camera2DService extends AbstractService implements Camera2DServiceInterface {
   
    constructor(){
        super();
        GE.subscribeComponentEvent(ComponentEvents.Render, this.render.bind(this));
        GE.subscribeComponentEvent(ComponentEvents.AddComponent,this.addCamera.bind(this))
    }
    private mainCamera: CameraComponentInterface;

    private cameraArray = new ArraySet<CameraComponentInterface>();

    get MainCamera(){
        return this.mainCamera;
    };
    /**
     * 将物体渲染在各个Camera的canvas,当前只处理mainCamera.
     * @param canvas 需要被渲染的物体. 
     * @param x 
     * @param y 
     */
    render(canvas: HTMLCanvasElement, x: number, y: number) {
        const cameraArray = this.cameraArray.valus();
        for(let i = 0;i< cameraArray.length; i++){
            const camera = cameraArray[i];
            camera.render(canvas,x,y);
        }
    };

    addCamera(camera: CameraComponentInterface){
        if(camera.NameSpace === ComponentNameSpace.Camera2DComponent){
            if(!this.mainCamera){
                this.setMainCamera(camera);
            }else{
                this.cameraArray.add(camera);
            }
        }
    };

    setMainCamera(camera: CameraComponentInterface){
        this.mainCamera = camera;
        this.cameraArray.add(camera);
    };

    removeCamera(camera: CameraComponentInterface){
        this.cameraArray.remove(camera);
        if(this.mainCamera === camera){
            this.mainCamera = this.cameraArray.get(0);
        }
    };

  
}