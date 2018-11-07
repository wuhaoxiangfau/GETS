import GEObject from "../../cntroller/implements/GEObject";
import AbstractServiceInterface from "../interface/AbstractServiceInterface";
import GE from "../../cntroller/GE";
import { ServiceNameSpaces } from '../../../config/RuntimeConfig';

export default class AbstractService  extends GEObject implements AbstractServiceInterface { 
   
    getService(serviceNameSpace: ServiceNameSpaces):AbstractServiceInterface {

        return GE.getServiceMap().get(serviceNameSpace);
    }
}