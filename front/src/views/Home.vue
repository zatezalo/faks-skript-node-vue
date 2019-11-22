<template>
  <div class="home">
    <div class="container">
      <h1 class="display-4">Topics</h1>
      <div class="text-right">
          <!--<a href="/topic/create" class="btn btn-primary text-light mb-3">New Topic</a>-->
          <router-link v-bind:to="'/topics/create'" class="btn btn-primary text-light mb-3">New Topic</router-link>
      </div>
      <div v-bind:key="topic.id" v-for="topic in topics">
        <!--<TopicCard v-bind:topic="topic" />-->
        <div class="card mb-3">
            <div class="card-header">
              <router-link v-bind:to="'/topic/'+topic.id"><a>{{topic.title}}</a></router-link>
                <!--<a href="/topics/{{ $topic->id }}">Update</a>-->
            </div>
            <div class="card-body">
                <p class="card-text">{{topic.description}}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopicCard from './topics/TopicCard'
export default {
  name: 'home',
  components: {
    TopicCard
  },
  //props: ["topics"],
  data(){
      return {
        topics: []
      }
  },
  methods:{

  },
  created(){
    axios.get('http://127.0.0.1:8083/').then(data => {
      console.log(data.data);
      //this.topics = data.data;
      this.topics = data.data;
      console.log(this.topics);
    });
  }
}
</script>
