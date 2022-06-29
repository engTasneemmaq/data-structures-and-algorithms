'use strict';

const bracketValdiation = require('../stack-queue-brackets');

describe('brackets validation test', () => {
    it('Return true for valid brackets', () => {

      expect(bracketValdiation('{}')).toBe(true);

      expect(bracketValdiation('{}(){}')).toBe(true);

      expect(bracketValdiation('()[[Extra Characters]]')).toBe(true);

      expect(bracketValdiation('(){}[[]]')).toBe(true);

      expect(bracketValdiation('{}{Code}[Fellows](())')).toBe(true);
    });
    
    it('Return false for invalid brackets', () => {
      expect(bracketValdiation('[({}]')).toBe(false);

      expect(bracketValdiation('(](')).toBe(false);

      expect(bracketValdiation('{(})')).toBe(false);
    });
  });