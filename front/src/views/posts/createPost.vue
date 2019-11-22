<template>
    <div class="post-create">
        <div class="container">
            <h1>Create post</h1>
            <form v-on:submit="submit" v-on.="" >
                
                <div class="form-group">
                    <label>Post Title</label>
                    <input name="title" v-model="form.title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title">
                </div>

                <div class="form-group">
                    <label for="comment">Text:</label>
                    <textarea name="text" v-model="form.description" class="form-control" rows="7" id="comment"></textarea>
                </div>

                <button type="submit" class="btn btn-primary float-right">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Post_Create",
    props: ["post"],
    data: function(){
        return {
            form: {
                userId: 1,
                topicId: this.$route.params.id,
                title: null,
                description: null
            }
        }
    },
    methods:{
        submit: function() {
            axios.post('http://127.0.0.1:8083/posts/create', this.form).then((res) => {
                console.log(res);
            })
            this.$router.push('/topic/'+this.$route.params.id);
        }
    }
}
</script>

<style scoped>
    .post-create {
        padding-top: 5%;
    }
    .levo {
        float: left;
    }
</style>