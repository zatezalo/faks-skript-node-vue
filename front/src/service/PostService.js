import Api from './Api'

export default {
    getPost(credentials) {
        return Api().get('post/:id', credentials);
    },
    createPost(credentials) {
        return Api().post('post/create', credentials);
    },
    editPost(credentials) {
        return Api().post('post/edit', credentials);
    },
    deletePost(credentials) {
        return Api().deletePost('post', credentials);
    }

}