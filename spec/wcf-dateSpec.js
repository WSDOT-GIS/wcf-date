/* eslint-env jasmine */

if (typeof window === 'undefined') {
  var wcfDate = require('../lib/wcf-date')
}

describe('wcf-date', function () {
  const s = '/Date(1408431600000-0700)/'

  it('should be able to parse a WCF date.', function () {
    var d = wcfDate.parseWcfDate(s)
    expect(d instanceof Date).toEqual(true)
  })

  it('should be be able to convert a Date to WCF string', function () {
    var d = wcfDate.parseWcfDate(s)
    var s2 = wcfDate.toWcfDateString(d)
    var d2 = wcfDate.parseWcfDate(s2)
    expect(d.getTime()).toEqual(d2.getTime())
  })
})
