import GameObject from "./GameObject";
import TestComponents from "../../components/implements/TestComponents";
import Position2DComponents from "../../components/implements/Position2DComponents";
import Render2DComponent, {RectCanvas} from "../../components/implements/Render2DComponent";
import MoveComponent from "../../components/implements/MoveComponent";

export default class TestGameObject extends GameObject{

    constructor(){
        
        super();

        // const test = this.addComponent(new TestComponents());
        
        this.addComponent(new Position2DComponents());
        
        this.addComponent(new Render2DComponent(new RectCanvas(100,100,'#808080').Canvas));

        this.addComponent(new MoveComponent()).Speed = 300;
    }

}