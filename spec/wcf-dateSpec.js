/*eslint-env jasmine */
let wcfDate = require("../lib/wcf-date");

describe("wcf-date", function () {
    it("should be able to parse a WCF date.", function () {
        let s = "/Date(1408431600000-0700)/";
        let d = wcfDate.parseWcfDate(s);
        expect(d instanceof Date).toEqual(true);
    });

    it("should be be able to convert a Date to WCF string", function(){
        let s = "/Date(1408431600000-0700)/";
        let d = wcfDate.parseWcfDate(s);
        let s2 = wcfDate.toWcfDateString(d);
        let d2 = wcfDate.parseWcfDate(s2);
        expect(d.getTime()).toEqual(d2.getTime());
    });
});