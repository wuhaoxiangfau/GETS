import AbstractService from "./AbstractService";
import CollisionServiceInterface, { ImpactInfo, MotionInfo, ImpackTask, ImpactInstanceInfo } from "../interface/CollisionServiceInterface";
import Collision2DComponentInterface from "../../components/interface/Collision2DComponentInterface";
import GE, { GEEvents } from "../../cntroller/GE";
import AbstractComponent from "../../components/implements/AbstarctComponent";
import Map from "../../../util/map/Map";
import MutiValueMap from "../../../util/map/MutiValueMap";
import AbstarctComponentInterface from "../../components/interface/AbstarctComponentInterface";


export class CollisionService extends AbstractService implements CollisionServiceInterface {

   constructor(){
       super();
       GE.addEventListener(GEEvents.AddComponent, this.registImpactTask);
       GE.addEventListener(GEEvents.RemoveComponent, this.unRegistImpactTask);
       //TODO object Destory 监听.
    }

    private objectToComponentsMap = new MutiValueMap<number,number>();
    private impackTaskMap = new Map<number, ImpackTask>();

    //描述两个Object是否相撞.
    private isObjectHittingRecord = new Map<string, ImpactInfo>();

    private registImpactTask = ( component:AbstarctComponentInterface ) => {

        if((<any>component).OnHit || (<any>component).OnLeave){
            const gameObject = component.gameObject;
            const impackTask = new ImpackTask((<any>component).onHit, (<any>component).onLeave);
            this.objectToComponentsMap.add(gameObject.Id, component.Id);
            this.impackTaskMap.set(component.Id, impackTask);
        }
    };

    private unRegistImpactTask = ( component:AbstractComponent ) => {
        const gameObject = component.gameObject;
        this.objectToComponentsMap.removeValue(gameObject.Id, component.Id);
        this.impackTaskMap.delete(component.Id);
    };

    
    //TODO 记录gamgeObjectId与位置信息.
    public updateCollisionInfo( collision: Collision2DComponentInterface, motionInfo: MotionInfo ){
        collision.gameObject.Id;
        collision.CollisionType;
        collision.OffsetX;
        collision.OffsetY;
        motionInfo.Position;
        motionInfo.OldPosition;

        new ImpactInstanceInfo(collision.gameObject.Id,motionInfo.Position);
    };

    //TODO 碰撞计算。
    public update(){

    }

    //TODO 在碰撞结果计算完成后调用该函数.
    private runOnHitTaskArray(impackInfoArray: Array<ImpactInfo>){

        const curImpacRecord = new Map<string,boolean> ();

        for(let i = 0 ; i< impackInfoArray.length; i++){
            const impackInfo = impackInfoArray[i];
            const key = this.combineId(impackInfo.Other.GameObjectId, impackInfo.Self.GameObjectId);
            curImpacRecord.set(key, true);
            if( !this.isObjectHittingRecord.get(key) ){
                this.runOnHitTask(impackInfo);
                this.isObjectHittingRecord.set(key, impackInfo);
            }
        }

        const lastHitedIdArray = this.isObjectHittingRecord.keys();
        for(let i = 0; i< lastHitedIdArray.length; i++){
            const key = lastHitedIdArray[i];
            if(!curImpacRecord.get(key)){
                this.runOnLeaveTask(this.isObjectHittingRecord.get(key));
                this.isObjectHittingRecord.delete(key);
            }
        }


    }

    private combineId(id1: number, id2: number): string{
        if(id1 > id2){
            return `${id2}_${id1}`;
        }else{
            return  `${id1}_${id2}`;
        }
    }


    private runOnHitTask(impackInfo: ImpactInfo){

            const objSelfTasks = [...this.getHitTasks(impackInfo.Self.GameObjectId)];
            for(let i = 0; i< objSelfTasks.length; i++){
                try{
                    objSelfTasks[i](impackInfo.Other);
                }catch(e){
                    console.error(e);
                }
                
            }
            const objOtherTasks = [...this.getHitTasks(impackInfo.Other.GameObjectId)];
            for(let i = 0; i< objOtherTasks.length; i++){
                try{
                    objOtherTasks[i](impackInfo.Self);
                }catch(e){
                    console.error(e);
                }
            }
       
    };

    private runOnLeaveTask(impactInfo: ImpactInfo){
        
            const objSelfTasks = [...this.getLeaveTasks(impactInfo.Self.GameObjectId)];
            for(let i = 0; i< objSelfTasks.length; i++){
                try{
                    objSelfTasks[i](impactInfo.Other);
                }catch(e){
                    console.error(e);
                }
                
            }
            const objOtherTasks = [...this.getLeaveTasks(impactInfo.Other.GameObjectId)];
            for(let i = 0; i< objOtherTasks.length; i++){
                try{
                    objOtherTasks[i](impactInfo.Self);
                }catch(e){
                    console.error(e);
                }
            }
    };

    private getImpackArry(gameObjectId: number):  Array<ImpackTask>{
        return this.objectToComponentsMap.get(gameObjectId).map(componentIds => this.impackTaskMap.get(componentIds)); 
    }

    private getHitTasks(gameObjectId: number): Array<Function>{
        const tasksArray = new Array<Function>();
        const impackArry = this.getImpackArry(gameObjectId);
        for(let i =0 ; i< impackArry.length; i++){
            const impack: ImpackTask = impackArry[i];
            if(impack&&impack.OnHit){
                tasksArray.push(impack.OnHit);
            }
        }
        return tasksArray;
    };
    private getLeaveTasks(gameObjectId: number): Array<Function>{
        const tasksArray = new Array<Function>();
        const impackArry = this.getImpackArry(gameObjectId);
        for(let i =0 ; i< impackArry.length; i++){
            const impack: ImpackTask = impackArry[i];
            if(impack&&impack.OnLeave){
                tasksArray.push(impack.OnLeave);
            }
        }
        return tasksArray;
    };



}
