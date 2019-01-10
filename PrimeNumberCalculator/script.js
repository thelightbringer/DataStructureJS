<<<<<<< HEAD
class Node {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if(node == null) {
            this.root = new Node(data);
            return;
        } else {
            const searhTree = function(node) {
                if(data < node.data) {
                    if(node.left == null) {
                        node.left = new Node(data);
                        return;
                    } else
                        return searhTree(node.left);
                } else if(data > node.data) {
                    if(node.right == null) {
                        node.right = new Node(data);
                        return
                    } else
                        return searhTree(node.right);
                } else
                    return null;
            }
            return searhTree(node);
        }
    }

    findMin() {
        let current = this.root;
        while(current.left) {
            current = current.left;
        }
        return current.data;
    }
    findMax() {
        let current = this.root;
        while(current.right) {
            current = current.right;
        }
        return current.data;
    }
    find(data) {
        let current = this.root;
        while(current.data != null) {
            if(data < current.data) {
                current = current.left;
            } else if(data > current.data) {
                current = current.right;
            } else {
                return current.data;
            }            
        }
        return null;
    }
    remove(data) {
        const removeNode = function(node, data) {
            if(node == null) return null;
            if(node.data == data) {
                if(node.left == null || node.right == null) 
                    return null;
                if(node.right == null) 
                    return node.left;
                if(node.left == null) 
                    return node.right;
                let tempNode = node.right;  
                while(tempNode.left != null)
                    tempNode = tempNode.left
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if(data < node.data) {
                node.left = removeNode(node.left, data);
            } else {
                node.right = removeNode(node.right, data);
            }
        }
        this.root = removeNode(this.root, data);
    }
}

mocha.setup("bdd");
const {assert} = chai;

describe("Binary Search Tree", () => {
    // TBD
   });
=======
const primes = num => {
    const arr = Array(num).fill(true);
    arr[0] = false;
    arr[1] = false;
    for(let i=2;i<Math.sqrt(num);i++) {
        for(let j=2;i*j<num;j++) {
            arr[i*j] = false;
        }
    }
    return arr.reduce((acc, val, index) => 
        val ? acc.concat(index):acc, []);

    //return arr.reduce((primes, isPrime, prime) => (isPrime ? primes.concat(prime) : primes),[]);

}

mocha.setup("bdd");
const {assert} = chai;

describe("Sieve of Eratosthenes", () => {
    it("Should return all prime numbers", () => {
     assert.deepEqual(primes(10), [2, 3, 5, 7]);
    });
   });
>>>>>>> c00316593e10bb7e6f35651bcd78943559b1d783
mocha.run();