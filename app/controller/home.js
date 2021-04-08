'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '本地代码同步到远程服务器';
  }
}

module.exports = HomeController;
