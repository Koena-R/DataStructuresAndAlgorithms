export default class Stack{

    #Item = class {
        constructor(value){
            this.value=value;
            this.top=null;
            this.bottom=null;
        }
    };

    constructor(){
        console.log("THE STACK");
        this.length=0;
        this.top=null;
    }

    add(item){

        this.length++;

        if(!this.top) return this.top=new this.#Item(item);

        this.top.top = new this.#Item(item);
        this.top.top.bottom = this.top;
        return this.top = this.top.top;
    }
    remove(){
        if(!this.top) return null;
        
        this.length--;

        if(!this.top.bottom){
            delete this.top;
            this.top=null;
            return null;
        }

        this.top.bottom.top=null;
        return this.top= this.top.bottom;
    }
    peek(){
        return this.top;
    }
    print(){
        let current=this.top;
        if (this.top){
            
        }
    }
}

