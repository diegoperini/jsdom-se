"use strict";

const EventImpl = require("./Event-impl").implementation;
const ProgressEventInit = require("../generated/ProgressEventInit");

class ProgressEventImpl extends EventImpl {
  constructor(args, privateData) {
    const type = args[0]; // TODO: Replace with destructuring
    const eventInitDict = args[1] || ProgressEventInit.convert(undefined);

    super([type, eventInitDict], privateData);
  }
}

module.exports = {
  implementation: ProgressEventImpl
};
