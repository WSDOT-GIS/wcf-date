(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.wcfDate = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseWcfDate = parseWcfDate;
    exports.toWcfDateString = toWcfDateString;

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    /**
     * Utility functions for converting between Date
     * objects and WCF date representation strings.
     * @module wcf-date
     * */
    /**
     * Parses a WCF date string into a Date object.
     * @param {string} wcfDate - WCF date string.
     * @example
     * "\/Date(1408431600000-0700)\/"
     * @returns {Date} parsed date
     * @throws {TypeError} Thrown if input is not a string
     * @throws {Error} Thrown if string is not in correct format.
     */
    function parseWcfDate(wcfDate) {
        // Ensure a string was provided as input.
        if (typeof wcfDate !== "string") {
            throw new TypeError("Invalid input type");
        }
        // Regexp matches WCF date format. [full match, date as int, offset or undefined]
        var re = /\/Date\((\d+)(-\d+)?\)\//;
        var match = wcfDate.match(re);
        if (!match) {
            throw new Error("Invalid format.");
        }

        var _match$slice$map = match.slice(1).map(function (s) {
            return s ? parseInt(s, 10) : 0;
        }),
            _match$slice$map2 = _slicedToArray(_match$slice$map, 2),
            main = _match$slice$map2[0],
            offset = _match$slice$map2[1];

        var time = main + offset;
        return new Date(time);
    }
    /**
     * Converts a Date into a WCF string representation of a date.
     * @param {Date} date - A date object.
     * @returns {string} - WCF formatted string.
     */
    function toWcfDateString(date) {
        if (!(date && date instanceof Date)) {
            throw new TypeError("Input is not date: " + date + " (" + (typeof date === "undefined" ? "undefined" : _typeof(date)) + ")");
        }
        return "/Date(" + date.getTime() + ")/";
    }
});
