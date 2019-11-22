const { Comment } = require('../models');
const config = require('../config/config');

module.exports = {
    async create(req, res) {
        try {
            let commenttmp = req.body;

            const comment = await Comment.create(commenttmp).catch(error => {
                console.log("Post GRESKA ", error);
            });

            const commentJson = comment.toJSON();

            res.send({
                comment: commentJson,
            });
        } catch (error) {
            res.status(400).send({
                error: 'Comment create error'
            });
        }
    },
    async edit(req, res) {

    },
    async delete(req, res) {

    }
}