const HashTable = require('../hashtable');

const myhashTable = new HashTable(10);

describe('Hash Table Tests', () => {
    it('Should add a key/value to your hashtable results in the value being in the data structure', () => {
        let key = 'Tasneem' ;
        let value = '401 student'
        myhashTable.add( key , value);
        expect(myhashTable.contains(key)).toBe(true);
        expect(myhashTable.find(key)).toBe(value);
       
    });


    it('Should retrieve based on a key returns the value stored', () => {
        let key = 'Tasneem' ;
        let value = '401 student'
        myhashTable.add( key , value);
        expect(myhashTable.contains(key)).toBe(true);
        expect(myhashTable.find(key)).toBe(value);
    });

    it('Should successfully returns null for a key that does not exist in the hashtable', () => {
        let key = 'Tasneem12'
        expect(myhashTable.find(key)).toBe(null);
    });

    it('Should successfully handle a collision within the hashtable', () => {
        let key1 = 'abc' ;
        let value1 = '401 student'
        let key2 = 'cba' ;
        let value2 = '401 student'

        myhashTable.add(key1, value1);
        myhashTable.add(key2, value2);
        
        expect(myhashTable.contains(key1)).toBe(true);
        expect(myhashTable.contains(key2)).toBe(true);
        expect(myhashTable.find(key1)).toBe(value1);
        expect(myhashTable.find(key2)).toBe(value2);
    });

    it('Should successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
        let key1 = 'abc' ;
        let value1 = '401 student'
        let key2 = 'cba' ;
        let value2 = '401 student'

        myhashTable.add(key1, value1);
        myhashTable.add(key2, value2);

        expect(myhashTable.find(key1)).toBe(value1);
        expect(myhashTable.find(key2)).toBe(value2);
    });

    it('Should successfully hash a key to an in-range value', () => {
        let key = 'Tasneem'

        expect(myhashTable.getHash(key) < 50).toBe(true);
    });

});