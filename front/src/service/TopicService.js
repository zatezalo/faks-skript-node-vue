import Api from './Api'

export default {
    getAllTopics(credentials) {
        return Api().get('', credentials);
    },
    getTopic(credentials) {
        return Api().post('topic/:id', credentials);
    },
    createTopic(credentials) {
        return Api().post('topic/create', credentials);
    },
    editTopic(credentials) {
        return Api().post('topic/edit', credentials);
    }

}