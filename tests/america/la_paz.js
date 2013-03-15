var moment = require("../../moment-timezone");

exports.rules = {
	"America/La_Paz 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/La_Paz").zone(), 240, "2013-01-01T00:00:00+00:00 should be 240 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/La_Paz").zone(), 240, "2013-12-31T23:59:59+00:00 should be 240 minutes offset");

		test.done();
	},

	"America/La_Paz 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/La_Paz").format("HH:mm"), "20:00", "2013-01-01T00:00:00+00:00 should be 20:00 in America/La_Paz");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/La_Paz").format("HH:mm"), "19:59", "2013-12-31T23:59:59+00:00 should be 19:59 in America/La_Paz");

		test.done();
	}
};