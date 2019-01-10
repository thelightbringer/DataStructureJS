class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    add(data) {
        this.children.push(new Node(data));
    }
    remove(data) {
        this.children = this.children.filter(child => child.data !== data);
    }
    traverseDF(val) {
        let collection = [this.root];
        while(collection.length) {
            let node = collection.shift();
            if(node.data == val) {
                return true;
            } else {
                collection.unshift(...node.children);
            }
        }
        return false;
    }
    traverseBF(vl) {
        let collection = [this.root];
        while(collection.length) {
            let node = collection.shift();
            if(node.data == val) {
                return true;
            } else {
                collection.push(...node.children);
            }
        }
        return false;
    }
}


mocha.setup("bdd");
const {assert} = chai;

describe("Binary Tree", () => {
    // TBD
   });
mocha.run();