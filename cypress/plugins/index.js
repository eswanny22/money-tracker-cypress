const { isFileExist } = require('cy-verify-downloads');

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('task', { isFileExist })
}