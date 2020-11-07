<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="`/post/${post.id}`">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    let posts = []
    try {
      const response = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
      // console.log('response get all posts', response)
      posts = response
    } catch (e) {
      console.log('error getting posts')
    }
    return { posts }
  }
}
</script>
