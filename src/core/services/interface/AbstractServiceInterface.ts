import GEObjectInterface from "../../cntroller/interface/GEObjectInterface";
import CameraInterface from "../../gameObject/interface/CameraInterface";

export default interface AbstractServiceInterface extends GEObjectInterface {

    getMainCamera(): CameraInterface;

}