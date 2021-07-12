class Pilha{
    constructor( size = 10 ){
        this.maxSize = size;
        this.dados = [];
        this.topo = -1;
    }

    push(dado){
        if (!this.isFull()){
            this.topo++;
            this.dados[this.topo] = dado;
        }else{
            throw new Error("stack overflow");
        }
    }

    pop(){
        if (!this.isEmpty()){
            this.topo--;
        }else{
            throw new Error("stack underflow");
        }
    }

    isFull(){
        if (this.length() === this.maxSize){
            return true;
        }
        return false;
    }

    isEmpty(){
        if (this.length() === 0){
            return true;
        }
        return false;
    }

    top(){
        if (!this.isEmpty()){
            return this.dados[this.topo];
        }
    }

    length(){
        return this.topo + 1;        
    }

    clear(){
        this.topo = -1
    }

    toString(){

    }
}

export default Pilha;