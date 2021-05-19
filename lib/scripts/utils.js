"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils = {
    isArrayOfTypes: (arr) => {
        let ret = '';
        if (!Array.isArray(arr)) {
            return false;
        }
        if (arr.every(x => Array.isArray(x)))
            ret = 'arrays';
        if (arr.every(x => typeof x === 'number' || typeof x === 'string'))
            ret = 'strings';
        if (arr.every(x => typeof x === 'string'))
            ret = 'strings';
        if (arr.every(x => typeof x === 'number'))
            ret = 'numbers';
        if (arr.every(x => typeof x === 'object' && !Array.isArray(x)))
            ret = 'objects';
        return ret;
    },
    isObjectOfTypes: (arr) => {
        if (Array.isArray(arr)) {
            return false;
        }
        let ret = '';
        let arrValues = Object.values(arr);
        if (arrValues.every(x => typeof x === 'number' || typeof x === 'string'))
            ret = 'strings';
        if (arrValues.every(x => Array.isArray(x)))
            ret = 'arrays';
        if (arrValues.every(x => typeof x === 'string'))
            ret = 'strings';
        if (arrValues.every(x => typeof x === 'number'))
            ret = 'numbers';
        if (arrValues.every(x => typeof x === 'object' && !Array.isArray(x)))
            ret = 'objects';
        return ret;
    }
};
exports.default = utils;
