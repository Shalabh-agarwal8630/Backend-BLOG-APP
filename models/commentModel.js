const mongoose = require("mongoose");

//route handler
const commentSchema = new mongoose.Schema({
  // konsi post par comment kr re ho iska type hoga id type
  post: {
    //jab bhi ham ksii aur model ko refer krre hote h id ke through to ham is tareeke  se likhte h
    //mongoose.Schema.Types.ObjectId
    type: mongoose.Schema.Types.ObjectId,

    ref: "Post", //reference to post model,
  },
  user: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Comment", commentSchema);

//1.konsi post par comment krre ho
//2.kon comment krra h
//3.kya comment krre ho
