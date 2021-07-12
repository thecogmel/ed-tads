import Lista from "../src/Lista";

class FilaDinamica {
	constructor() {
        this.lista = new Lista();
	}

	enqueue(dado) {
        this.lista.append(dado);
	}

	dequeue() {
		this.lista.removeBeginning();
	}

	isEmpty() {
		return this.lista.isEmpty();
	}

	clear() {
		this.lista.clear();
	}

	lenght(){
        return this.lista.size();     
    }

	front() {
		return this.lista.top();
	}

    last() {
		this.lista.last();
	}
}

export default FilaDinamica;
