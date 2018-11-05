import { Uuid } from "../../../util/uuid";
import GEObjectInterface from "../interface/GEObjectInterface";

export default  class GEObject implements GEObjectInterface{
    
    public id = Uuid.getUuid();

    // [index: string]: any;

    public constructorFunction: any;

    constructor(){
        this.constructorFunction = this.constructor;
    }

} 