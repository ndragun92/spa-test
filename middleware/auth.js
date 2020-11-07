export default function ({ store, redirect }) {
  // If user is authenticated
  console.log('middleware triggered', store.state.test)
}
