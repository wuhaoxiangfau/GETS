import AbstractServiceInterface from "./AbstractServiceInterface";

export enum ResourceType{
    AUDIO = 1,
    IMAGE = 2,
    VIDEO = 3,
}

export class Resource {

    constructor(url: string, type: ResourceType){
        this.url = url;
        this.type = type;
    }

    private url: string;
    private type: ResourceType;
    private content : HTMLImageElement;

    get Url(){
        return this.url;
    }

    get Type(){
        return this.type;
    }

    get Content(){
        return this.content;
    }

    set Content(content){
        this.content = content;
    }

}

export default interface ResourceLoaderInterface extends AbstractServiceInterface { 
    
    loadResource(resource: Resource): void;

    onLoaded(fun: () => void ):void;

    isloading(): boolean;

    LoaingNumber: number;

    LoadedNumber: number;
}