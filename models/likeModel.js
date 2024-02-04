// Import Mongoose
const mongoose = require("mongoose");

// Route Handler
const likeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", //reference to the post model
  },
  user: {
    type: String,
    required: true,
  },
});

// Export
module.exports = mongoose.model("Like", likeSchema);
//The required: true part means that whenever you create a new "Like" (for example, when someone likes a post),
//you must provide a value for the user field, and that value must be a non-empty string.

//Think of it like this: when you save information about a "like" in your database, you want to know who made that like, right?
//The user field is where you store that information. By saying required: true,
// you're telling your database that it's mandatory to provide the name of the user who made the like. Without this information,
// your database won't accept the new "like" because it needs to know who did it.

//So, in short, required: true ensures that certain information (in this case, the user's name)
//is always provided when you're saving a new "like" in your database.
