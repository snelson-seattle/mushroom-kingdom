const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mushroomSchema = new Schema({
  mushroom: [
    {
      name: {
        type: String,
      },
      image_url: {
        type: String,
      },
      description: {
        type: String,
      },
      family: {
        type: String,
      },
      genus: {
        type: String,
      },
      species: {
        type: String,
      },
      price: {
        type: Number,
      },
      quantity_available: {
        type: Number,
      },
      toxic: {
        type: Boolean,
      },
    },
  ],
});

const mushroom = mongoose.model("mushroom", mushroomSchema);

module.exports = mushroom;