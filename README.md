wcf-date
========

[![Build Status](https://travis-ci.org/WSDOT-GIS/wcf-date.svg?branch=master)](https://travis-ci.org/WSDOT-GIS/wcf-date)
[![bitHound Overall Score](https://www.bithound.io/github/WSDOT-GIS/wcf-date/badges/score.svg)](https://www.bithound.io/github/WSDOT-GIS/wcf-date)
[![bitHound Dependencies](https://www.bithound.io/github/WSDOT-GIS/wcf-date/badges/dependencies.svg)](https://www.bithound.io/github/WSDOT-GIS/wcf-date/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/WSDOT-GIS/wcf-date/badges/devDependencies.svg)](https://www.bithound.io/github/WSDOT-GIS/wcf-date/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/WSDOT-GIS/wcf-date/badges/code.svg)](https://www.bithound.io/github/WSDOT-GIS/wcf-date)

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