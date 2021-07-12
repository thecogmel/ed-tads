import FilaDinamica from "../src/FilaDinamica";

let f;

beforeEach(() => {
	f = new FilaDinamica();
});

test("Instanciação", () => {
	expect(f.isEmpty()).toBe(true);
	expect(f.lenght()).toBe(0);
	expect(() => {
		f.dequeue();
	}).toThrowError("A lista está vazia.");
});

test("Completa a fila", () => {
	f.enqueue("A");
	f.enqueue("B");
	f.enqueue("C");
	f.enqueue("D");
	f.enqueue("E");
	expect(f.isEmpty()).toBe(false);
	expect(f.lenght()).toBe(5);
	f.dequeue();
	expect(f.front()).toBe("B");
});
