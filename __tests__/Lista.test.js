import Lista from "../src/Lista";

let l;

beforeEach(() => {
	l = new Lista();
});

test("Instanciacao", () => {
	expect(l.size()).toBe(0);
	expect(l.isEmpty()).toBe(true);
});

test("Teste do último para o final", () => {
	l.add(1);
	l.add(2);
	l.add(3);
	l.add(4);
	expect(l.size()).toBe(4);
	expect(l.toString()).toBe("4->3->2->1");
    expect(l.lastToFirst()).toStrictEqual([1,2,3,4]);
    expect(l.lastToFirst2()).toBe("1->2->3->4");
    expect.anything(l.randomList());
    expect(l.randomList()).toBe("1->2->3->4");
});
