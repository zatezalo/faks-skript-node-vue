const { Post, Comment } = require('../models');
const config = require('../config/config');

module.exports = {
    async getPost(req, res) {
        
        try {
            const post = await Post.findOne({
                where: {
                    id: req.params.id
                }
            });

            const comments = await Comment.findAll({
                where: {
                    postId: req.params.id
                }
            });

            //res.send(post);
            res.send([post,comments]);
        } catch (error) {
            res.status(400).send({
                error: 'Post create error'
            });
        }


    },
    async create(req, res) {
        try {
            let posttmp = req.body;

            const post = await Post.create(posttmp).catch(error => {
                console.log("Post GRESKA ", error);
            });

            const postJson = post.toJSON();

            res.send({
                post: postJson,
            });
        } catch (error) {
            res.status(400).send({
                error: 'Post create error'
            });
        }


    },
    async edit(req, res) {
        try{
            const title = req.body.title;
            const description = req.body.description;
            
            const currPost = await Post.findOne({
                where: {
                    id: req.body.id
                }
            });

            currPost.update({
                title: title,
                description: description
            })

            const postJson = currPost.toJSON();

            res.send({
                post: postJson,
            });
        }
        catch(error){
            res.status(400).send({
                error: 'post create error'
            });
        }
    },
    async delete(req, res) {
        try {

            console.log(req.body);
            const id = req.body.id;
            const topicId = req.body.topicId;
            /**/

            await Comment.destroy({
                where: {
                    postId: id
                }
            });

            //const comments = await Comment.findAll();

            await Post.destroy({
                where: {
                    id: id
                }
            });

            const posts = await Post.findAll({
                where: {
                    topicId: topicId
                }
            });

            res.send(posts);

        }catch (error) {
            console.log(error)
        }
    }
}