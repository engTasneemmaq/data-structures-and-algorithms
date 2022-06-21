
const Stack = require('../stack/stack');

describe('Stack Model', () => {


    it('Can successfully push onto a stack', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.top.value).toEqual(2);
    });


    it('Can successfully push multiple values onto a stack', () => {
        let stack = new Stack();
        stack.push(1);
        expect(stack.top.value).toEqual(1);
        stack.push(2);
        expect(stack.top.value).toEqual(2);
        stack.push(3);
        expect(stack.top.value).toEqual(3);
    });


    it('Can successfully pop off the stack', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toEqual(3);
        expect(stack.pop()).toEqual(2);
        expect(stack.pop()).toEqual(1);
    });

    it('Can successfully empty a stack after multiple pops', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.isEmpty()).toBeTruthy();
    });


    it('Can successfully peek the next item on the stack', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        expect(stack.peek()).toEqual(2);
    });


    it('Can successfully instantiate an empty stack', () => {
        let stack = new Stack();
        expect(stack instanceof Stack).toBeTruthy();
    });

    it('Calling pop or peek on empty queue raises exception', () => {
        let stack = new Stack();
        expect(() => stack.pop()).toBeNull;
        expect(() => stack.peek()).toBeNull;
      });

});