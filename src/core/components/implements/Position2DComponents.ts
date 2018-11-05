import AbstractComponent from "./AbstarctComponent";
import Position2DComponentsInterface from "../interface/Position2DComponentsInterface";

export default class Position2DComponents extends AbstractComponent implements Position2DComponentsInterface{

    constructor(){
        super();
    }

    private x = 0;

    private y = 0;

    private rotation = 0;

    private oldX = 0;

    private oldY = 0;

    private oldRotation = 0;

    private isDirty = false;

    get X(){
        return this.x;
    }

    get Y(){
        return this.y;
    }
    get IsDirty(){
        return  this.isDirty;
    }

    set X(x: number){
        if(x !== this.x){
            this.oldX = this.x;
            this.x = x;
            this.isDirty = true;
            
        }
    }

    set Y(y: number){
        if(y !== this.y){
            this.oldY = this.y;
            this.y = y;
            this.isDirty = true;
        }
    }
    
    set Rotation(rotation: number){
        if( rotation !== this.rotation ){
            this.oldRotation = this.rotation;
            this.rotation = rotation;
            this.isDirty = true;
        }
        
    }

    get OldX(){
        return this.oldX;
    }

    get OldY(){
        return this.oldY;
    }
    
    get Rotation(){
        return this.rotation;
    }

    get OldRotation(){
        return this.oldRotation;
    }

    public afterUpdated(){
        this.isDirty = false;
    }
    
}