import AbstarctComponentInterface from './AbstarctComponentInterface'

export default interface Render2DComponentInterface extends AbstarctComponentInterface {
  render():void;
  ImageResource: HTMLCanvasElement|HTMLImageElement;
}
