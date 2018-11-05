import AbstractService from "./AbstractService";
import TimerInterface from '../interface/TimerInterface';
export default class Timer extends AbstractService implements TimerInterface{
        constructor(){
            super();
        }
        //单位秒(s).
        private  dealTime = 0;
        //单位秒(s).
        private  startFromeNow = 0;

        private  startTime = 0;

        //时间的缩放 单位 ms=> s, ( 0 ~ 1 ) * 0.001;
        private sacle = 1 * 0.001;

        get DealTime (){
            return this.dealTime
        };

        get StartFromeNow (){
            return this.startFromeNow;
        };

        get Scale(){
            return this.sacle * 1000;
        }

        set Scale(scale: number){
            if(scale>1){
                this.sacle = 0.001;
            }else if(scale <0){
                this.sacle = 0;
            }else{
                this.sacle = scale * 0.001;
            }
        }

        public init(){
            this.startTime = Date.now();
        };
        

        public willUpdate(){
            const newStartFromeNow = (Date.now() - this.startTime) * this.sacle;
            
            this.dealTime = (newStartFromeNow - this.startFromeNow);
            this.startFromeNow = newStartFromeNow;
        };
}