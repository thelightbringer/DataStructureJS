/*
Constructor functions
*/ 
function Node(data) {
	this.data = data;
	this.next = null;
}

function SingleList() {
	this.length = 0;
	this.head = new Node();
}

function ListData() {
	this.url = null;
}
/**********************************************************************************************/
/*
	Adding methods to prototype
*/
SingleList.prototype.add = function(data) {
	this.length++;
	if(!this.head.data) { this.head = data; return }
	else { addToNode(this.head); }
	function addToNode(node) {
			if(!node.next) {node.next = data; return}
			else { addToNode(node.next)}
		}	
}

SingleList.prototype.searchAt =  function(pos) {
	var count = 0;
	var node = this.head;
	while(count < this.length) {
		if(count == pos) {return node;}
		else {node = node.next;}
		count++;
	}
	return "No node at this position";
}

SingleList.prototype.removeAt = function(pos) {
	var count = 0;
	var node = this.head;
	while(count < this.length) {
		if(count == pos) { 
			this.length--;
			if(node == this.head) {
				this.head = node.next;
				return;
				}
			else {
				previosNode.next = node.next;
				node = null;
				return;
				}
			}
		else {
			previosNode = node;
			node = node.next;
			}
		count++;
	}
	return "No node at this position";
}
/**********************************************************************************************/
var node1data = new ListData();
node1data.url = "google"

var node2data = new ListData();
node2data.url = "facebook"

var node3data = new ListData();
node3data.url = "stackoverflow"

var node4data = new ListData();
node4data.url = "sapient"

var node1 = new Node(node1data);
var node2 = new Node(node2data);
var node3 = new Node(node3data);
var node4 = new Node(node4data);

var listExample = new SingleList();
listExample.add(node1);
listExample.add(node2);
listExample.add(node3);
listExample.add(node4);
