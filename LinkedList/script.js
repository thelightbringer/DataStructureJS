class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertHead(data) {
        this.head = new node(data);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while(node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getHead() {
        return this.head ;
    }

    getTail() {
        if (!this.head) return;
        let node = this.head;

        while(node.next) {
            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
    }

    removeHead() {
        if (!this.head) return;
        this.head = this.head.next;
    }

    removeTail() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let prev = this.head;
        let node = this.head.next;
        
        while(node.next) {
            prev = node;
            node = node.next;
        }

        prev.next = null;
    }
}

mocha.setup('bdd');
const{assert} = chai;
describe("Linked List", () => {
    it("Should implement insertHead", () => {
     const chain = new LinkedList();
     chain.insertHead(1);
     assert.equal(chain.head.data, 1);
    });
    it("Should implement size", () => {
     const chain = new LinkedList();
     chain.insertHead(1);
     assert.equal(chain.size(), 1);
    });
    it("Should implement getHead", () => {
     const chain = new LinkedList();
     chain.insertHead(1);
     assert.equal(chain.getHead().data, 1);
    });
    it("Should implement getTail", () => {
     const chain = new LinkedList();
     chain.insertHead(1);
     assert.equal(chain.getTail().data, 1);
    });
    it("Should implement clear", () => {
     const chain = new LinkedList();
     chain.insertHead(1);
     chain.clear();
     assert.equal(chain.size(), 0);
    });
    it("Should implement removeHead", () => {
     const chain = new LinkedList();
     chain.insertHead(1);
     chain.removeHead();
     assert.equal(chain.size(), 0);
    });
    it("Should implement removeTail", () => {
     const chain = new LinkedList();
     chain.insertHead(1);
     chain.removeTail();
     assert.equal(chain.size(), 0);
    });
    it("Should implement insertTail", () => {
     const chain = new LinkedList();
     chain.insertTail(1);
     assert.equal(chain.getTail().data, 1);
    });
    it("Should implement getAt", () => {
     const chain = new LinkedList();
     chain.insertHead(1);
     assert.equal(chain.getAt(0).data, 1);
    });
    it("Should implement removeAt", () => {
     const chain = new LinkedList();
     chain.insertHead(1);
     chain.removeAt(0);
     assert.equal(chain.size(), 0);
    });
    it("Should implement insertAt", () => {
     const chain = new LinkedList();
     chain.insertAt(0, 1);
     assert.equal(chain.getAt(0).data, 1);
    });
    it("Should implement forEach", () => {
     const chain = new LinkedList();
     chain.insertHead(1);
     chain.insertHead(2);
     chain.forEach((node, index) => (node.data = node.data + index));
     assert.equal(chain.getTail().data, 2);
    });
    it("Should implement iterator", () => {
     const chain = new LinkedList();
     chain.insertHead(1);
     chain.insertHead(2);
     for (let node of chain) node.data = node.data + 1;
     assert.equal(chain.getTail().data, 2);
    });
   });

mocha.run();
