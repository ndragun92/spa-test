<template>
  <div>
    <pre v-if="!$fetchState.pending">
      {{ post }}
    </pre>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async fetch () {
    await this.getPost()
  },
  data: () => ({
    post: null
  }),
  methods: {
    async getPost () {
      try {
        const response = await this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
        // console.log('response get single post', response)
        this.post = response
      } catch (e) {
        console.log('error getting posts')
      }
    }
  }
}
</script>
