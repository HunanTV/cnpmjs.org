/**!
 * mgtv.com - controllers/web/package/list_all.js
 *
 * Copyright(c) mgtv.com and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  huyinghuan <ec.huyinghuan@gmail> (https://apying.com)
 */

'use strict';

/**
 * Module dependencies.
 */
var packageService = require('../../../services/package');

module.exports = function* listAuthorPackage() {
  var limit = Number(this.query.limit) || 20;
  var index = Math.abs(Number(this.query.index))  || 1;
  var author = this.params.author
  if(!author){
      yield this.render('list_author_packages', {
        packages: [],
        title: "私有库列表",
        total: 0,
        author: "Unknow"
      })
  }
  var result = yield *packageService.listAuthorPackage(this.params.author, index, limit);
  var packages = result[0]
  var totalCount = result[1][0].totalPage
  var totalPage = parseInt(totalCount / limit)
  var mod =  totalCount % limit
  if(mod != 0){
    totalPage = totalPage + 1
  }
  yield this.render('list_author_packages', {
    packages: packages,
    title: "私有库列表",
    totalPage: totalPage,
    totalCount: totalCount,
    author: author
  })
};
