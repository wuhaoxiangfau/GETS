import AbstractServiceInterface from "./AbstractServiceInterface";

export default interface TimerInterface extends AbstractServiceInterface {

    readonly DealTime:number;

    readonly StartFromeNow :number;

    init(): void;

    willUpdate():void;
}