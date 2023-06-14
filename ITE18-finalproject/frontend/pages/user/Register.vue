<template>
  <div>
    <!-- Menu div -->
    <div class="bg-gray-800 py-4 px-4">
      <NuxtLink class="text-white p-2 hover:bg-gray-700" to="/">Home</NuxtLink>
      <NuxtLink v-if="!isAuthenticated" class="text-white p-2 hover:bg-gray-700" to="/user/login">Sign In</NuxtLink>
    </div>

    <!-- Container div with two equal-sized divs -->
    <div class="flex">
      <!-- First equal div with custom class -->
      <div class="flex-1 custom-div1">
        <!-- Add content or customization for the first equal-sized div here -->
        <h2>Travel Tails and Trails</h2>
        <p>Already have an Account? <NuxtLink class="link" to="/user/login">Login Here</NuxtLink></p>
      </div>

      <!-- Second equal div with custom class -->
      <div class="flex-1 custom-div2">
        <div class="max-w-md w-full mx-auto mt-8">
          <h1 class="text-3xl font-extrabold mb-4">Register</h1>
          <form @submit.prevent="userRegister">
            <div v-if="err" class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
              {{ err }}
            </div>
            <div v-if="success" class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
              Your account has been created successfully!
              <NuxtLink class="font-medium" to="/user/login">Login</NuxtLink>
            </div>
            <div class="mb-6">
              <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
              <input v-model="username" type="text" class="username" required>
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Address</label>
              <input v-model="email" type="email" class="email" required>
            </div>
            <div class="mb-6">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
              <input v-model="password" type="password" class="password" required>
            </div>
            <button type="submit" class="button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: 'guest',
  data() {
    return {
      success: false,
      err: null,
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async userRegister() {
      try {
        this.$axios.setToken(false)
        await this.$axios.post('http://localhost:1337/api/auth/local/register', {
          username: this.username,
          email: this.email,
          password: this.password,
          isAuthenticated: false // Initialize the isAuthenticated property
        })
        this.success = true
        // Display success message
        this.$toast.success('Your account has been created successfully!', {
          duration: 5000,
        })
      } catch (e) {
        if (e.response && e.response.data && e.response.data.error) {
          this.err = e.response.data.error.message
        }
      }
    },
  },
}
</script>

<style>
.custom-div1 {
  /* Custom styles for the first equal-sized div */
  /* Add your own styles here */
  background: url('@/static/picture.png') no-repeat center center/cover;
}

.custom-div2 {
  height: fit-content;
  background-color: #13818F;
}

.custom-div2{
  height: 693px;
}
</style>


<style>

p{
  color: white;
  font-size: 18px;
  text-align: center;
}

.link:hover{
  color: #19AABC;
  transition: 0.3s;
}

h2{
  text-align: center;
  color: white;
  font-size: 50px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 800;
  margin-top: 280px;
}

h1{
  color: aliceblue;
  text-align: center;
  font-size: 45px !important;
  margin-top: 100px;
  padding-bottom: 50px;
}

.username{
  background-color: transparent;
  padding: 10px 250px 10px 1px;
  border-color: white;
  border-width: 0px 0px 2px 0px;
  color: white;
  transition: 0.9s;
}

.email{
  background-color: transparent;
  padding: 10px 250px 10px 1px;
  border-color: white;
  border-width: 0px 0px 2px 0px;
  color: white;
  transition: 0.9s;
}

.password{
  background-color: transparent;
  padding: 10px 250px 10px 1px;
  border-color: white;
  border-width: 0px 0px 2px 0px;
  color: white;
  transition: 0.9s;
}

.button{
  margin-top: 10px;
  background-color: #8F2113;
  padding: 10px 30px 10px 30px;
  color: white;
  border-radius: 5px;
  transition: 0.3s;
  border-width: 1px;
}

.button:hover{
  background-color: #13818F;
  border-color: #19AABC;
  border-width: 1px;
  color: #FFFFFF;
}

</style>
