import GEObject from "../../cntroller/implements/GEObject";
import AbstractServiceInterface from "../interface/AbstractServiceInterface";
import GE from "../../cntroller/implements/GE";
import { ServiceNameSpaces } from '../../../util/data/Enum';

export default class AbstractService  extends GEObject implements AbstractServiceInterface { 
   
    getService(serviceNameSpace: ServiceNameSpaces):AbstractServiceInterface {

        return GE.getServiceMap().get(serviceNameSpace);
    }
}