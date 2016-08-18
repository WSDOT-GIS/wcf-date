/*eslint no-console:off*/
const fs = require("fs-extra");

const srcDir = "es2015";
const destDir = "dist";
const fn = "wcf-date.d.ts";

let src = `${srcDir}/${fn}`;
let dest = `${destDir}/${fn}`;


fs.access(src, (error) => {
    if (error) {
        throw new Error(`Source file not found: ${src}`);
    } else {
        console.log(`Copying ${src} to ${dest}`);
        fs.copy(src, dest, {
            clobber: true,
            preserveTimestamps: true
        }, (error) => {
            if (error) {
                console.error(`Error copying ${src} to ${dest}`, error);
                throw error;
            }
        });
    }
});