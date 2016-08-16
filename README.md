wcf-date
========

Converts between WCF date and JavaScript Date object.

Install
-------

    npm install wcf-date

Use Module
----------

### Node.js ###

```javascript
let wcfDate = require("wcf-date");
```

### Browser ###

```html
<script src="node_modules/wcf-date/lib/wcf-date.js" />
```

### Demo ###

```javascript
let wcfDate = require("wcf-date");
let s = "/Date(1408431600000-0700)/";
let d = wcfDate.parseWcfDate(s);
// 2014-08-19T06:59:59.300Z
let s2 = wcfDate.toWcfDateString(d);
// "/Date(1408431599300)/"
```