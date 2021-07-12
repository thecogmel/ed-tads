class Node {
    constructor(dado) {
        this.dado = dado;
        this.proximo = null;
    }
}

class PilhaDinamica{
    constructor(){
        this.topo = new Node();
    }

    push(dado){
        let novo_no = new Node(dado);

        novo_no.proximo = this.topo.proximo;
        this.topo.proximo = novo_no;
    }

    pop(){
        if (!this.isEmpty()){
            let aux = this.topo.proximo;
            this.topo.proximo = aux.proximo;
            this.topo.dado = aux.dado;
        }else{
            throw new Error("stack underflow");
        }
    }

    isEmpty(){
        if (this.topo.proximo === null){
            return true;
        }
        return false;
    }

    top(){
        if (!this.isEmpty()){
            return this.topo.dado;
        }
    }

    length(){
        if (!this.isEmpty()) {
            let cont = 0;
            let tmp = this.topo;

            while (tmp.proximo !== null) {
                cont++;
                tmp = tmp.proximo;
		    }
		return cont;
        
        } else {
            return 0;
        }       
    }

    clear() {
		this.topo = new Node(null);
	}
}

export default PilhaDinamica;