import GEObject from "../../cntroller/implements/GEObject";
import AbstractServiceInterface from "../interface/AbstractServiceInterface";
import GE from "../../cntroller/GE";
import CameraInterface from "../../gameObject/interface/CameraInterface";

export default class AbstractService  extends GEObject implements AbstractServiceInterface { 
    getMainCamera(): CameraInterface{
        return GE.getMainCamera();
    }
}