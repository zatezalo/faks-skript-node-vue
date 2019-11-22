<template>
    <div class="topic">
        <div class="card mb-3">
            <div class="card-header">
                <a href="/topic">{{topic.title}}</a>
                <!--<a href="/topics/{{ $topic->id }}">Update</a>-->
            </div>
            <div class="card-body">
                <p class="card-text">{{topic.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'topicCard',
  props: ["topicCard"],
  methods:{

  },
  data:()=>({
      title:'ime topika',
      description:'opis topika',

  })
}
</script>
