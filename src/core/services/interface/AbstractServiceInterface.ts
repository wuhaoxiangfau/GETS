import GEObjectInterface from "../../cntroller/interface/GEObjectInterface";
import { ServiceNameSpaces } from "../../../util/data/Enum";


export default interface AbstractServiceInterface extends GEObjectInterface {

    getService(serviceNameSpace: ServiceNameSpaces): AbstractServiceInterface;

}