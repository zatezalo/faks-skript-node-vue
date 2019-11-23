<template>
  <div class="profile">
    <div class="container">
      <h1>Profile of {{name}}</h1>

      <div v-bind:key="post.id" v-for="post in posts">
        <div class="card mb-3">

          <div class="card-header">
            <router-link v-bind:to="'/post/'+post.id">{{post.title}}</router-link>
            <button @click="deletePost(post.id, topic.id)" class="del">x</button>
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
  name: 'profile',
  data(){
        return {
          id:this.$route.params.id,
          user: {},
          posts: [],
          name: null
        }
    },
    created() {
        axios.get('http://localhost:8083/profil/'+this.id).then(data => {
            console.log(data);
            //this.topics = data.data;
            this.user = data.data[0];
            this.name = this.user.email.replace(/@.*$ /,"");
            this.posts = data.data[1];
            //console.log(name);
            ///console.log(this.topics);
        });
    }
}
</script>
<style scoped>
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