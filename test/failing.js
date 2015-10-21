var tape = require('tape')
var schema = require('./fixtures/schema.json')
var validator = require('../')

tape('external reference', function(t) {
	var validate = validator({
		'$ref': '#ext'
	}, {
		schemas: {'ext':schema}
	})

	t.notOk(validate({port:80}), 'should be invalid')
	t.end()
})