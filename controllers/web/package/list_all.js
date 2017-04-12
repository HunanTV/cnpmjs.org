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
var totalService = require('../../../services/total');

module.exports = function* listAll() {
  var limit = Number(this.query.limit) || 20;
  var index = Math.abs(Number(this.params.index))  || 1;

  var result = yield [totalService.get(), packageService.listAll(index, limit)] ;
  var total = result[0]
  var packages = result[1]

  var totalPage = parseInt(total.doc_count / limit)
  var mod =  total.doc_count % limit
  if(mod != 0){
    totalPage = totalPage + 1
  }
  total.totalPage = totalPage
  yield this.render('list_all', {
    packages: packages,
    title: "私有库列表",
    total: total
  })
};
