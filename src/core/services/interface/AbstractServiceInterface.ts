import GEObjectInterface from "../../cntroller/interface/GEObjectInterface";
import CameraInterface from "../../gameObject/interface/CameraInterface";
import { ServiceNameSpaces } from "../../../config/RuntimeConfig";


export default interface AbstractServiceInterface extends GEObjectInterface {

    getService(serviceNameSpace: ServiceNameSpaces): AbstractServiceInterface;

}