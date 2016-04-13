"use strict";

const should = require('should');
const bones = require('../');

describe('Bones', () => {
    it('be bonesy', () => {
        bones.should.be.Function();
    });
});
