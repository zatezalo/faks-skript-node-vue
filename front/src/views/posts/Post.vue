<template>
    <div class="post">
        <div class="container">
            <router-link v-bind:to="'/topic/'+post.topicId" class="btn btn-primary btn-sm ">Back to topic</router-link>
        
            <h1>{{post.title}}</h1>
            <small>Posted: {{post.createdAt}}</small>
            <div>
                <p>
                    {{post.description}}
                </p>
            </div>

            <div class="float-right row desno">
                <!--<a href="/posts/edit" class="btn btn-primary desno">Edit</a>/posts/:id/edit-->
                <router-link v-bind:to="'/post/'+post.id+'/edit'" class="btn btn-primary desno ">Edit</router-link>
                <!--<form action="" method="post" >
                
                    <button type="submit" class="btn btn-primary ">Delete</button>
                </form>-->
            </div>

            <br>

            <h3>Comments:</h3>

            <div v-bind:key="comment.id" v-for="comment in comments">
                <div class="card-header">
                    <a>ko je napravio kom komentara{{comment.userId}}</a>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <p class="card-text">{{comment.description}}</p>
                    </div>
                </div>
            </div>

            <br>

            <form v-on:submit="submit" style="margin-top: 15px;">
                <div class="form-group">
                    <label for="comment">Comment:</label>
                    <textarea name="text" v-model="form.description" class="form-control" rows="7" id="comment"></textarea>
                </div>
                <button type="submit" class="btn btn-primary float-right">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Post",
    data(){
        return {
            id:this.$route.params.id,
            post: {},
            comments: [],
            form: {
                userId: 1,
                postId: this.$route.params.id,
                description: null
            }
        }
    },
    methods:{
        submit: function() {
            axios.post('http://127.0.0.1:8083/post/'+this.id, this.form).then((res) => {
                console.log(res);
            })
            //this.$router.push('/');
        }
    },
    created() {
        axios.get('http://127.0.0.1:8083/post/'+this.id).then(data => {
            console.log(data);
            //this.topics = data.data;
            //this.topic = data.data[0];
            this.post = data.data[0];
            this.comments = data.data[1];
            ///console.log(this.topics);
        });
    }
}
</script>

<style scoped>
    .post {
        padding-top: 5%;
    }
    .desno {
        margin-right: 2px;
    }
    .belo {
        color: white;
    }
</style>