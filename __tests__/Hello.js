/**
 * Esta é uma classe de Hello World básica em JavaScript.
 * @author {https://github.com/taniro}
 * @license {https://github.com/taniro/AulaED/blob/master/LICENSE}
 */
class Hello {
	/**
	 * Construtor padrão da classe Hello recebe (opcionalmente) uma texto com a mensagem.
	 * @param {text} [m = "hello"] - Mensagem. Caso não informado a mensagem será "hello".
	 */
	constructor(m = "hello") {
		this.message = m;
	}

	/**
	 * Método para ler a mensagem guardada.
	 * @returns {text} - Retorna a mensagem.
	 * @throws {Error} - Lança um erro mensagem não encontrada caso a mensagem não seja definida.
	 */
	getMessage() {
		if (this.message != undefined) {
			return this.message;
		}
		throw new Error("Mensagem não encontrada");
	}
}

export default Hello;