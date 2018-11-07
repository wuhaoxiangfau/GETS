import { Uuid } from "../../../util/uuid";
import GEObjectInterface from "../interface/GEObjectInterface";

export default  class GEObject implements GEObjectInterface{
    
    private id = 0;

    get Id(){
        // return ;
        return this.id;
    }

    // [index: string]: any;

    public constructorFunction: any;

    constructor(){
        this.constructorFunction = this.constructor;
        this.id =  Uuid.getUuid();
    }

} 