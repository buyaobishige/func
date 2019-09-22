'use strict';

/** Const path = require('path');*/

// Theme API.
module.exports = { extend: '@vuepress/theme-default' };
/*
 *       Alias() {
 * const { themeConfig, siteConfig } = ctx
 * // resolve algolia
 * const isAlgoliaSearch = (
 * themeConfig.algolia
 * || Object.keys(siteConfig.locales && themeConfig.locales || {})
 * .some(base => themeConfig.locales[base].algolia)
 * )
 * return {
 * '@AlgoliaSearchBox': isAlgoliaSearch
 * ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
 * : path.resolve(__dirname, 'noopModule.js')
 * }
 *},
 */
