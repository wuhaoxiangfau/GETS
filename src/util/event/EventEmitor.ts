import MutiValueMap from "../map/MutiValueMap";

export default class EventEmitor {

    private listeners = new  MutiValueMap<string, Function>();

    addEventListener(eventName: string, fun: Function){
        this.listeners.add(eventName, fun);
    }

    removeEventListener(eventName: string, fun: Function){
        this.listeners.removeValue(eventName, fun);
    }

    emit(eventName: string, ...params:Array<any> ){
      const listeners = [ ...this.listeners.get(eventName).valus() ];
      for(let i = 0; i< listeners.length; i++){
          try{
            listeners[i](...params);
          }catch (e){
              console.error(e);
          }
          
      }
    }
}
