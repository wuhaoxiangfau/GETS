import AbstractService from "./AbstractService";
import InputServiceInterface, {KeyBoard} from '../interface/InputServiceInterface';

export default class InputService extends AbstractService implements InputServiceInterface{
    


    constructor(){
        super();
        window.addEventListener('keydown', event => {
            this.isKeysDown[event.key] = true;
            this.hasKeysDown[event.key] = true;
            this.hasKeysUp[event.key] = false;
        });

        window.addEventListener('keyup', event => {

            this.isKeysDown[event.key] = false;
            this.hasKeysDown[event.key] = false;
            this.hasKeysUp[event.key] = true;
        })
    };

    protected isKeysDown: any = {};

    protected hasKeysDown: any = {};

    protected hasKeysUp: any = {};
    
    updated(){
        const downKeys = Object.keys(this.hasKeysDown);
        for(let i = 0; i< downKeys.length; i++){
            this.hasKeysDown[downKeys[i]] = false;
        }

        const upKeys = Object.keys(this.hasKeysUp);
        for(let i = 0; i< upKeys.length; i++){
            this.hasKeysUp[upKeys[i]] = false;
        }
    }

    keyDown(keyBoard: KeyBoard): boolean{
        return this.hasKeysDown[keyBoard];
    }

    keyUp(keyBoard: KeyBoard): boolean{
        return this.hasKeysUp[keyBoard];
    }

    isKeyDown(keyBoard: KeyBoard): boolean{
        return this.isKeysDown[keyBoard];
    };

    isKeyUp(keyBoard: KeyBoard): boolean{
        return !this.isKeysDown[keyBoard];
    };

    onKeyDown(keyBoard: KeyBoard, fun: Function): void{
        fun();
    };

    onKeyUp( keyBoard: KeyBoard, fun: Function): void{
        fun();
    };
}