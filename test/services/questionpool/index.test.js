'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('questionpool service', function() {
  it('registered the questionpools service', () => {
    assert.ok(app.service('questionpools'));
  });
});
