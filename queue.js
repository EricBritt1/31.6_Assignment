/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // We are creating a new instance of Node
    let node = new Node(val)

    // If there isn't a value stored in Node then the first node we put in will hold this value but, it'll be considered last in queue.
    if(!this.val) {
      this.val = node;
      this.last = node;
    }
    // We add another node behind the node infront. Then that new node will be considered the last node in the queue.
    else {
      this.last.next = node;
      this.last = node;
    }
    // Increase size of Queue
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // If there isn't a first value then that means the queue is empty. That's how this logic works
    if (!this.first) throw new Error("Can't dequeue from an empty queue.");

    // temp is set to the first node container
    let temp = this.first;

    // if the first node container is considered the last node container
    if (this.first == this.last) {
      // Empty node so queue size is completely empty
      this.last = null;
    }
    // Ask kwame about this one. The current node that was first is now being removed from queue and the node after the original first one that was just taken care of is up next. 
    this.first = this.first.next;
    //Decrease size of Queue
    this.size--;
    // return value of node WE TOOK CARE OF (The one that is deleted and leaving the queue from the front)
    return temp.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(!this.first) throw new Error("Can't peak from an empty queue.");

    return this.first.val

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.first) return true
    return false
  }
}

module.exports = Queue;
