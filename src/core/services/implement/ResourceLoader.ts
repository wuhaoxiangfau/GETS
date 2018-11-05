import AbstractService from "./AbstractService";
import ResourceLoaderInterface, {Resource, ResourceType} from "../interface/ResourceLoader";
import Map from "../../../util/map/Map";

export class ResourceLoader extends AbstractService implements ResourceLoaderInterface {

    constructor(){
        super();
        this.initMethodMap();
    }
    
    private methodMap: Map<ResourceType, (resource: Resource) => Promise<Function>>;

    private loadingNumber = 0;

    private loadedNumber = 0;

    private allCompleteTasks = new Array<Function>();

    private loadedSourceMap = new Map<string, Resource>();
    
    
    get LoadedNumber(){
        return this.loadedNumber;
    }

    get LoaingNumber () {
        return this.loadingNumber;
    }

    protected getFullUrl (url: string): string {
        const templink = document.createElement('link');
        templink.href = 'url';
        return templink.href;
    }

    protected initMethodMap(){
        this.methodMap =  new Map<ResourceType, (resource: Resource) => Promise<Function> >();
        this.methodMap.set(ResourceType.IMAGE, this.loadImage);
    };
    


    public async loadResource(resource: Resource) {

        const loadedSource = this.loadedSourceMap.get(this.getFullUrl(resource.Url));
        if(loadedSource){
            resource.Content = loadedSource.Content;
            return;
        }

        this.loadingNumber++;
        await  this.methodMap.get(resource.Type)(resource);
        this.loadedNumber++;
        this.loadedSourceMap.set(this.getFullUrl(resource.Url), resource);
        if(this.loadingNumber === this.loadedNumber){
            this.flushCompleteTasks();
        }
    };

    protected loadImage(resource: Resource): Promise<Function>{
        const image = new Image();
        const permise = new Promise<Function>( (resolve, reject) => {
            image.addEventListener('load', () => {
                resource.Content = image;
                resolve();
            });
            image.addEventListener('error', event => {
                console.error(event);
                reject();
            });
        });
        image.src = resource.Url;
        return permise;
    };

    public onLoaded(fun: () => void ):void {

        if(this.loadedNumber === this.loadingNumber){
            fun();
        }else{
            this.allCompleteTasks.push(fun)
        }
    };

    public isloading(){
        return this.loadedNumber === this.loadedNumber;
    }

    protected flushCompleteTasks(){
        for(let i = 0 ; i< this.allCompleteTasks.length; i++){
            this.allCompleteTasks[i]();
        }
        this.allCompleteTasks = [];
    };
}