/*eslint no-console:off*/
const fs = require('fs-extra')

const srcDir = 'es2015'
const destDir = 'lib'
const fn = 'wcf-date.d.ts'

let src = `${srcDir}/${fn}`
let dest = `${destDir}/${fn}`

fs.access(src, (error) => {
  if (error) {
    console.error(`Source file not found: ${src}`)
    throw error
  } else {
    console.log(`Copying ${src} to ${dest}`)
    fs.move(src, dest, {
      clobber: true
    }, (error) => {
      if (error) {
        console.error(`Error copying ${src} to ${dest}`, error)
        throw error
      }
    })
  }
})
