//import model

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//
exports.createComment = async (req, res) => {
  try {
    //fetch data from request body
    const { post, user, body } = req.body;
    //create a comment object
    const comment=new Comment(
     {
      post,user,body
     }

    )
    //save the new comment into the database
    const savedComment=await comment.save();
    // const response = await Comment.create({ post, user, body });

    //comments ka poora System
    //is post ke upar is user ne ye comment kri to is post ko mene post ke collection ke andar search kia
    //post ke object ke andar 4 cheeze h unme se ek h comments ka array h to jab bhi naya comment aaega to mujhe use update krna h

    //push is a updation operator or new entry
    //pull to delete entry

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      //So, with { new: true }, updatedPost will be the post document after the new comment ID has been added to the comments array.
      //populate-- comment ki id h hamare pass abhi lets say merko ab id ni chaie actual document chaie to jo bhi actual document
      // us id se match krta h me use fetch kr skta hun using populate

      .populate("comments") //populate the comments array with comment documents
      //agar me isko use ni krunga to output object me aaegi ID
      //aur id ko merko failana h basically comment object chaie poora to me usko populate krunga that is why we are doing this thing
      
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error While creating comment",
    });
  }
};
