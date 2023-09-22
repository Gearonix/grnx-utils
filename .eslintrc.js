const grnx = require('./dist/packages/eslint')

module.exports = grnx({
  root: __dirname,
  tsconfig: 'tsconfig.base.json',
  monorepo: true
})
