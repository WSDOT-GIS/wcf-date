wcf-date
========

Converts between WCF date and JavaScript Date object.

```javascript
let wcfDate = require("../lib/wcf-date");
let s = "/Date(1408431600000-0700)/";
let d = wcfDate.parseWcfDate(s);
let s2 = wcfDate.toWcfDateString(d);
```