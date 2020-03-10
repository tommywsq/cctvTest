'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '""',
  IFRAME_LINK: '""',
  LOGIN_CALLBACK_LINK: '""'
})
