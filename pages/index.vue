<template>
  <div>
    <ul v-if="!$fetchState.pending">
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="`/post/${post.id}`">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  async fetch () {
    await this.getPosts()
  },
  data: () => ({
    posts: []
  }),
  methods: {
    async getPosts () {
      try {
        const response = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts')
        // console.log('response get all posts', response)
        this.posts = response
      } catch (e) {
        console.log('error getting posts')
      }
    }
  }
}
</script>
