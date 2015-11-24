/**
 * Created by nuintun on 2015/11/24.
 */

'use strict';

module.exports = function (Terminal){
  Terminal.prototype.setgCharset = function (g, charset){
    this.charsets[g] = charset;
    if (this.glevel === g) {
      this.charset = charset;
    }
  };
};
