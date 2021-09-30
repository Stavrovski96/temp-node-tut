// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// everytime you create your own module you start with ./ in ('./')

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

sayHi('Nikola')
sayHi(names.slavko)
sayHi(names.ivan)