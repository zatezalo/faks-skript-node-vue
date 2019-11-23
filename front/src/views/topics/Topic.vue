<template>
    <div class="topic">
        <div class="container">
            <h1>{{topic.title}}</h1>

            <div class="text-right">
                <router-link v-bind:to="'/topic/'+topic.id+'/edit'" class="btn btn-primary text-light mb-3 desno">Edit</router-link>
                <!--<a href="/topic/{{topic.id}}/create" class="btn btn-primary text-light mb-3 ">New post</a>-->
                <router-link v-bind:to="'/topic/'+topic.id+'/create'" class="btn btn-primary text-light mb-3">New post</router-link>
            </div>

            <div v-bind:key="post.id" v-for="post in posts">
                <div class="card mb-3">

                    <div class="card-header">
                        <router-link v-bind:to="'/post/'+post.id">{{post.title}}</router-link>
                        <button @click="deletePost(post.id, topic.id, post.userId)" class="del">x</button>
                        <!--<h3><a href="/post">{{post.title}}</a></h3>-->
                    </div>

                    <div class="card-body">
                        <p class="card-text">{{post.description}}</p>
                    </div>
                    <!--<small>Posted: {{$post->created_at}}</small>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Topic",
    data(){
        return {
            id: this.$route.params.id,
            topic: {},
            posts: []
        }
    },
    methods: {
        deletePost(id, topicId, userId){
            if(userId == this.$store.state.user.id){
                axios.delete('http:///127.0.0.1:8083/post',{data:{
                    "id":id,
                    "topicId": topicId
                    }}
                );
                this.$router.go();
            }
            else {
                alert("Not your Post");
            }
            
        },
        checkUser(userId){
            if(userId == this.$store.state.user.id){

            }
        }
    },
    created() {
        axios.get('http://127.0.0.1:8083/topic/'+this.id).then(data => {
            console.log(data);
            //this.topics = data.data;
            this.topic = data.data[0];
            this.posts = data.data[1];
            ///console.log(this.topics);
        });
    }
}
</script>

<style scoped>
    .topic {
        padding-top: 5%;
    }
    .desno {
        margin-right: 10px;
    }
    
    .del {
        background: #ff0000;
        color: #fff;
        border:  none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
</style>