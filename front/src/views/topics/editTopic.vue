<template>
    <div class="topic-create">
        <div class="container">
            <h1>Edit topic</h1>
            <form v-on:submit="submit">
                
                <div class="form-group">
                    <label>Topic Title</label>
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
    name: "Topic_Create",
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
            axios.post('http://127.0.0.1:8083/topic/edit', this.form).then((res) => {
                console.log(res);
            })
            //this.$router.push('/');
            this.$router.push('/topic/'+this.$route.params.id);
        }
    }
}
</script>

<style scoped>
    .topic-create {
        padding-top: 5%;
    }
    .levo {
        float: left;
    }
</style>