const userController = require('./controller/userController');
const topicController = require('./controller/topicController');
const postController = require('./controller/postController');
const commentController = require('./controller/commentController');

module.exports = (app) => {
    app.post('/register', userController.register);
    app.post('/login', userController.login);
    app.get('/allUsers', userController.getAllUsers);
    app.get('/profil/:id', userController.getUser);
    
    app.get('/', topicController.getAllTopics);
    app.get('/topic/:id', topicController.getTopic);
    app.post('/topics/create', topicController.create);
    app.post('/topic/edit', topicController.edit);

    app.get('/post/:id', postController.getPost);
    app.post('/posts/create', postController.create);
    app.post('/post/edit', postController.edit);
    app.delete('/post', postController.delete);

    app.post('/post/:id', commentController.create);

};