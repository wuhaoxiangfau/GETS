import AbstractComponent from "./AbstarctComponent";
import TimerInterface from "../../services/interface/TimerInterface";
import { ServiceNameSpaces } from "../../../config/RuntimeConfig";
import InputServiceInterface,{KeyBoard} from "../../services/interface/InputServiceInterface";

export default class TestComponents extends AbstractComponent{

    constructor(){
        super();
    }

    private timer: TimerInterface;

    private input: InputServiceInterface;

    awake(){
        console.log('awake...');
        this.timer = <TimerInterface> this.getService(ServiceNameSpaces.Timer);
        this.input = this.getService(ServiceNameSpaces.InputService);
    }

    start(){
        console.log('start....');
    }

    willUpdate(){
        console.log(`willUpdate...${this.timer.DealTime}`);
    }
    
    update(){
        console.log(`update...`);
        // console.log('isKeyDown： ', this.input.isKeyDown(KeyBoard.d));
        
        // console.log('isKeyUp: ',this.input.isKeyUp(KeyBoard.d));

        // console.log('keyDown ', this.input.keyDown(KeyBoard.d));

        // console.log('keyUp ', this.input.keyUp(KeyBoard.d));
    }

    updated(){
        console.log('updated...');
    }

    destroy(){
        console.log('destroy...');
    }

    destroyed(){
        console.log('destroyed...');
    }
}