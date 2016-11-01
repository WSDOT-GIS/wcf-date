/* eslint-env jasmine */

import { parseWcfDate, toWcfDateString } from '../lib/wcf-date'
import alerts from './SampleAlerts'

describe('wcf-date', function () {
  const s = '/Date(1408431600000-0700)/'

  it('should be able to parse a WCF date.', function () {
    var d = parseWcfDate(s)
    expect(d instanceof Date).toEqual(true)
  })

  it('should be able to parse WCF dates from Traffic API.', () => {
    if (!Array.isArray(alerts)) {
      throw new TypeError('alerts expected to be an array.')
    }
    for (let alert of alerts) {
      let dateStrings = [alert.StartTime, alert.EndTime, alert.LastUpdatedTime]
      for (let ds of dateStrings) {
        if (typeof ds === 'string') {
          let parsed
          expect(function () {
            parsed = parseWcfDate(ds)
          }).not.toThrowError()
          expect(parsed instanceof Date).toEqual(true)
        }
      }
    }
  })

  it('should be be able to convert a Date to WCF string', function () {
    var d = parseWcfDate(s)
    var s2 = toWcfDateString(d)
    var d2 = parseWcfDate(s2)
    expect(d.getTime()).toEqual(d2.getTime())
  })
})
