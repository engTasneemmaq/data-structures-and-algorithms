
const Queue = require('../queue/queue');


describe('Queue Model', () => {
    it('Can successfully enqueue into a queue', () => {
        let que = new Queue();
        que.enqueue(1);
        expect(que.front.value).toBe(1);
      });

    it('Can successfully enqueue multiple values into a queue', () => {
        let que = new Queue();
        que.enqueue(1);
        que.enqueue(2);
        expect(que.peek()).toEqual(1);
        expect(que.front.value).toEqual(1);

    });

    it('Can successfully dequeue out of a queue the expected value', () => {
        let que = new Queue();
        que.enqueue(1);
        que.enqueue(2);
        que.enqueue(3);
        expect(que.dequeue()).toEqual(1);
    });


    it('Can successfully peek into a queue, seeing the expected value ', () => {
        let que = new Queue();
        que.enqueue(1);
        que.enqueue(2);
        que.enqueue(3);
        expect(que.peek()).toEqual(1);
    });
   
    it('Can successfully dequeue out of a queue the expected value', () => {
        let que = new Queue();
        que.enqueue(1);
        que.enqueue(2);
        que.enqueue(3);
        que.enqueue(4);
        que.enqueue(5);
        expect(que.dequeue()).toBe(1);
      });

    it('Can successfully instantiate an empty queue ', () => {
        let que = new Queue();
        expect(que instanceof Queue).toBeTruthy();
    });

    it('Calling dequeue or peek on empty queue raises exception', () => {
        let queue = new Queue();
        expect(() => queue.dequeue()).toBeNull;
        expect(() => queue.peek()).toBeNull;
      });



});