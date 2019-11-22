const { Topic, Post } = require('../models');
const config = require('../config/config');

module.exports = {
    async getTopic(req, res) {
        try{
            const topic = await Topic.findOne({
                where: {
                    id: req.params.id
                }
            });
            
            const posts = await Post.findAll({
                where: {
                    topicId: req.params.id
                }
            });

            //res.send(topic);
            res.send([topic,posts]);
        }
        catch(err){
            console.log(err);
        }
    },
    async getAllTopics(req, res) {
        try{
            const topics = await Topic.findAll();
            res.send(topics);
        }
        catch(err){
            console.log(err);
        }
    },
    async create(req, res) {
        try {

            let topictmp = req.body;

            const topic = await Topic.create(topictmp).catch(error => {
                console.log("Topic GRESKA ", error);
            });

            const topicJson = topic.toJSON();

            res.send({
                topic: topicJson,
            });


        } catch (error) {
            res.status(400).send({
                error: 'Topic create error'
            });
        }
    },
    async edit(req, res) {
        try{
            const title = req.body.title;
            const description = req.body.description;
           
            const currTopic = await Topic.findOne({
                where: {
                    id: req.body.id
                }
            });
            
            currTopic.update({
                title: title,
                description: description
            })

            const topicJson = currTopic.toJSON();

            res.send({
                topic: topicJson,
            });
        }
        catch(error){
            res.status(400).send({
                error: 'Topic create error'
            });
        }
    }

}