/* eslint-disable radix */
const Counter = require("../models/counter");

module.exports = {
  async createExternalId() {
    // PG-{DATE}{SEQUENCE}
    const counter = (await module.exports.nextSequence())
      .toString()
      .padStart(6, 0);
    const now = new Date();
    const date = `${now.getDate().toString().padStart(2, 0)}${(
      now.getMonth() + 1
    )
      .toString()
      .padStart(2, 0)}${now.getFullYear().toString().substr(-2)}`;
    return `PG-${date}${counter}`;
  },

  async nextSequence(field = "virtual-accounts") {
    const ret = await Counter.findOneAndUpdate(
      {
        field,
      },
      {
        $inc: {
          sequence_value: 1,
        },
      },
      { new: true, upsert: true, returnOriginal: false }
    );

    return ret.sequence_value;
  },
};
