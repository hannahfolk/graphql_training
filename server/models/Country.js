const { Schema, model } = require("mongoose");

const countrySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Country = model("country", countrySchema);

module.exports = Country;
