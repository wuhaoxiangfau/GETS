export default class ClassType{
    
    static isChildClass(childClass: typeof Object, superClass: typeof Object): Object|boolean{
        let result: Object|boolean = false;
  
        if(childClass&&superClass&&childClass !== superClass){
            const childClassInstasce = new childClass();
            result =  childClassInstasce instanceof superClass && childClassInstasce;
        }
        return result;
    }
}