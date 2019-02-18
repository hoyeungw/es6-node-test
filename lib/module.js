"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
String.prototype.wL = function () {
  console.log(this);
};

var writeLine = function writeLine(some) {
  console.log(some);
};

exports.writeLine = writeLine;