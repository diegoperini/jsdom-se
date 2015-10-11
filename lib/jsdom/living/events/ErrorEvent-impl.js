"use strict";

const EventImpl = require("./Event-impl").implementation;
const ErrorEventInit = require("../generated/ErrorEventInit");

class ErrorEventImpl extends EventImpl {
  constructor(args, privateData) {
    const type = args[0]; // TODO: Replace with destructuring
    const eventInitDict = args[1] || ErrorEventInit.convert(undefined);

    super([type, eventInitDict], privateData);
  }
}

module.exports = {
  implementation: ErrorEventImpl
};
