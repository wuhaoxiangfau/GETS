import AbstractService from "../implement/AbstractService";
import CameraComponentInterface from "../../components/interface/Camera2DComponentInterface";

export default interface Camera2DServiceInterface extends AbstractService {

    readonly MainCamera:CameraComponentInterface;
    
    addCamera(camera: CameraComponentInterface): void;

    removeCamera(camera: CameraComponentInterface):void;

    setMainCamera(camera: CameraComponentInterface): void;

    
}
