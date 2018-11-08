import GameObjectInterface from "../../gameObject/interface/GameObjectInterface";
import AbstarctComponentInterface from "../../components/interface/AbstarctComponentInterface";

export enum GEEvents {
    AddComponent = 'addComp',
    RemoveComponent = 'removeComponent',
}

export default interface GEInterfece {
    
    readonly Instance: GEInterfece;

    init(): void;

    addEventListener(GEEvent: GEEvents, fun: Function): void;

    removeEventListener(GEEvent: GEEvents, fun: Function): void;

    pause(): void;

    start(): void;

    addComponent<T extends AbstarctComponentInterface>(gemeObject: GameObjectInterface, component: T): void;

    removeComponent(gemeObject: GameObjectInterface, component: AbstarctComponentInterface): void;
    destoryGameObject(gemeObject: GameObjectInterface): void;
}