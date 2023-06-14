<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="divbar">
    <NuxtLink v-if="!isAuthenticated" class="navbar" to="/">Home</NuxtLink>
    <NuxtLink v-if="!isAuthenticated" class="navbar" to="/user/login">Sign In</NuxtLink>
    <NuxtLink v-if="!isAuthenticated" class="navbar" to="/user/register">Sign Up</NuxtLink>
    <NuxtLink v-if="isAuthenticated" class="navbar" to="/user/loggedin">Home</NuxtLink>
    <NuxtLink v-if="isAuthenticated" class="navbar" to="/TimeZone">Time Zone</NuxtLink>
    <NuxtLink v-if="isAuthenticated" class="navbar" to="/BucketList">Bucket List</NuxtLink>
    <NuxtLink v-if="isAuthenticated" class="navbar" to="/Testimonial">Testimonial</NuxtLink>
    <button v-if="isAuthenticated" class="navbar" @click="userLogout">Sign Out</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  methods: {
    async userLogout() {
      try {
        await this.$auth.logout()
        // Perform any additional actions after successful logout
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error occurred during logout:', error)
      }
    },
  },
}
</script>

<style>

button{
  background-color: #13818F;
  padding: 10px 30px 10px 30px !important;
  border-radius: 5px;
  transition: 0.5s;
  border-width: 1px;
  border-color: #13818F;
}

button:hover{
  background-color: #1F2937;
  border-width: 1px;
  border-radius: 5px;
  border-color: #1F2937;
}

.navbar{
  padding: 5px 20px 5px 20px;
  color: white;
  transition: 0.5s;
}

.navbar:hover{
  background-color: #13818F;
  padding: 5px 20px 5px 20px;
}

.divbar{
  background-color: #1F2937 !important;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
}

</style>