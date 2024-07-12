const Post = require('../models/postModel');
const Like = require('../models/likeModel');

exports.createLike = async (req,res)=>{
    try{
        const{post,user} = req.body;
        const like = new Like({
            post,user,
        })

        const savedLike =await like.save();

        const updatePost = await Post.findByIdAndUpdate(post,{$push :{ likes: savedLike._id}},{new : true});

        res.json({
            post:updatePost,
        })
    }catch(error){
        return res.status(505).json({
            error:'Abe yede '
        })
    }
}


exports.unlikePost = async (req,res)=>{
    try{
        const {post,like} = req.body;
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});
        const updatedPost = await Post.findOneAndUpdate(post,{$pull : {like:deletedLike._id}},{new:true});

        res.json({
            post:updatedPost,
        })
    }catch(error){
        res.status(504).json({
            error:'Error while disliking the post',
        })
    }
}