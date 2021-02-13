const mongoose = require("mongoose");
const db = require("../models/mushroom");

// need to update localhost address
mongoose.connect(
  process.env.MONGODB_URI || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tudpv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{
  useNewUrlParser: true,
  useFindAndModify: false
});

const mushroomSeed = [
  {
    mushroom: [
      {

        name: " ",          //name of mushroom
        image_url: " ",     //image of mushroom 
        description: " ",   //description of mushroom
        family: " ",        //family of mushroom
        genus: " ",         //genus of mushroom
        species: " ",       //species of mushroom
        price: " ",         //price of mushroom -> integer
        available: " ",    //quantity of -> boolean true / false
        toxic: " "                  //toxic of mushroom -> boolean true / false

      }
    ]
  },
];

db.mushroom.remove({})
  .then(() => db.mushroom.collection.insertMany(mushroomSeed))
  .then((data) => {
    console.log(data.result.n + "sale");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
