/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import mod from 'submod'

// const mod = require('./main')

mod().then(m => {
  console.log('loaded', m)
  document.write('wasm module says 1 + 2 = ' + m._add(1, 2))
})
