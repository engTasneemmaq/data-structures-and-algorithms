'use strict';

const bracketValdiation = require('../stack-queue-brackets');

describe('validateBrackets', () => {
    it('Brackets in the string are balanced ', () => {
        let test = bracketValdiation('[({})]')

        expect(test).toBe(true);
    });

    it('Brackets in the string are balanced ', () => {
        let test = bracketValdiation('{}')

        expect(test).toBe(true);
    });

    it('Brackets in the string are balanced ', () => {
        let test = bracketValdiation('(){}[[]]')

        expect(test).toBe(true);
    });

    it('Brackets in the string are balanced ', () => {
        let test = bracketValdiation('[({}]')

        expect(test).toBe(false);
    });

    it('Brackets in the string are balanced ', () => {
        let test = bracketValdiation('(](')

        expect(test).toBe(false);
    });

    it('Brackets in the string are balanced ', () => {
        let test = bracketValdiation('{(})')

        expect(test).toBe(false);
    });


})