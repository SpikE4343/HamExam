'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('exam service', function() {
  it('registered the exams service', () => {
    assert.ok(app.service('exams'));
  });
});
