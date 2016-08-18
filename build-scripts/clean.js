/*eslint no-console:off*/
/**
 * Deletes files created by a previous build.
 */

const fs = require("fs");


/**
 * Deletes a directory
 * @param {string} dir - Directory path.
 */
function deleteDirectory(dir) {
    // Check to see if the directory exists.
    fs.access(dir, (accessErr) => {
        if (accessErr) {
            console.error(accessErr);
            return;
        }

        fs.readdir(dir, (readdirErr, files) => {
            if (readdirErr) {
                console.error(readdirErr);
            } else if (files && files.length) {
                for (let f of files) {
                    f = [dir, f].join("/");
                    fs.unlink(f, deleteErr => {
                        if (deleteErr) {
                            console.error("Error deleting file", deleteErr);
                        } else {
                            console.log(`deleted ${f}`);
                        }
                    });
                }
            }

        });
    });
}

let dirs = ["es2015", "dist"];

for (let d of dirs) {
    deleteDirectory(d);
}