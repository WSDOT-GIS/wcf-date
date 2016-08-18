/*eslint no-console:off*/

// Deletes files created by a previous build.

const fs = require("fs");

/**
 * Deletes a directory
 * @param {string} dir - Directory path.
 */
function deleteDirectory(dir) {
    // Check to see if the directory exists.
    fs.access(dir, (accessErr) => {
        // If there's an error parameter, it means the directory
        // doesn't exist and thus no deletion is necessary.
        if (accessErr) {
            console.log(`${dir} does not exist. Skipping deletion.`);
            return;
        }

        // Get a list of files in the directory.
        fs.readdir(dir, (readdirErr, files) => {
            if (readdirErr) {
                // There was an error reading the directory.
                // Log to the console.
                console.error(readdirErr);
            } else if (files && files.length) {
                // Delete each of the files and created an
                // array of promises so we know when they've
                // all been deleted.
                let promises = [];
                for (let f of files) {
                    let fpath = [dir, f].join("/");
                    let p = new Promise((resolve, reject) => {
                        // Combine directory and filename.
                        fs.unlink(fpath, deleteErr => {
                            if (deleteErr) {
                                console.error("Error deleting file", deleteErr);
                                reject(deleteErr);
                            } else {
                                console.log(`deleted ${fpath}`);
                                resolve();
                            }
                        });
                    });
                    promises.push(p);
                }
                // Delete the directory once all files have been deleted.
                Promise.all(promises).then(() => {
                    fs.rmdir(dir);
                })
            } else {
                // There are no files in the directory. Delete it.
                fs.rmdir(dir);
            }

        });
    });
}

// Specify the directories to be deleted.
let dirs = ["es2015", "dist"];

// Delete the directories.
for (let d of dirs) {
    deleteDirectory(d);
}