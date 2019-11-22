<template>
    <div class="post-edit">
        <div class="container">
            <h1>Edit post </h1>
            <form v-on:submit="submit" >
                
                <div class="form-group">
                    <label>Title</label>
                    <input name="title" v-model="form.title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title" value="">
                </div>

                <div class="form-group">
                    <label for="comment">Text:</label>
                    <textarea name="text" v-model="form.description" class="form-control" rows="7" id="comment" ></textarea>
                </div>

                <button type="submit" class="btn btn-primary float-right">Update</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Post_Edit",
    data: function(){
        return {
            form: {
                id: this.$route.params.id,
                title: null,
                description: null
            }
        }
    },
    methods:{
        submit: function() {
            axios.post('http://127.0.0.1:8083/post/edit', this.form).then((res) => {
                console.log(res);
            })
            //this.$router.push('/');
            this.$router.push('/post/'+this.$route.params.id);
        }
    }
}
</script>

<style scoped>
    .post-edit {
        padding-top: 5%;
    }
    .levo {
        float: left;
    }
</style>