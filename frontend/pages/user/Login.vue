<template>
  <div>
    <!-- Menu div -->
    <div>
      <Navbar />
    </div>

    <!-- Container div with two equal-sized divs -->
    <div class="flex">
      <!-- First equal div with custom class -->
      <div class="flex-1 custom-div1">
        <!-- Add content or customization for the first equal-sized div here -->
        <h2>Travel Tails and Trails</h2>
        <p>Don't have an account? <NuxtLink class="link" to="/user/register">Register Here</NuxtLink></p>
      </div>

      <!-- Second equal div with custom class -->
      <div class="flex-1 custom-div2">
        <div class="max-w-md w-full mx-auto mt-8">
          <h1 class="text-3xl font-extrabold mb-4">Login</h1>
          <form @submit.prevent="userLogin">
            <div v-if="err" class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
              {{ err }}
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input v-model="email" type="email" class="email" required>
            </div>
            <div class="mb-6">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
              <input v-model="password" type="password" class="password">
              <p class="login">
                <NuxtLink to="/user/reset">Reset Password</NuxtLink>
              </p>
            </div>
            <button :disabled="isLoading" type="submit" class="button">
              <span v-if="isLoading" class="loading"></span>
              <span v-else>Sign In</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: false,
      isLoading: false,
      err: null,
      email: '',
      password: '',
    };
  },
  methods: {
    async userLogin() {
      try {
        this.isLoading = true; // Set isLoading to true to show the loading spinner
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2-second delay
        await this.$auth.loginWith('local', {
          data: { identifier: this.email, password: this.password },
        });
        this.$router.push('/user/loggedin');
      } catch (e) {
        if (e.response && e.response.data && e.response.data.error) {
          this.err = e.response.data.error.message;
        }
      } finally {
        this.isLoading = false; // Set isLoading to false after the login attempt (whether success or failure)
      }
    },
  },
};
</script>

<style scoped>
.custom-div1 {
  /* Custom styles for the first equal-sized div */
  /* Add your own styles here */
  background: url('@/static/forest.png') no-repeat center center/cover;
}

.login {
  text-align: left;
  padding-top: 20px;
  font-size: 15px;
}

.custom-div2 {
  height: 693px;
  background-color: #13818F;
  padding: 20px;
}

p {
  color: white;
  font-size: 18px;
  text-align: center;
}

.link:hover {
  color: #19AABC;
  transition: 0.3s;
}

h2 {
  text-align: center;
  color: white;
  font-size: 50px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 800;
  margin-top: 280px;
}

h1 {
  color: aliceblue;
  text-align: center;
  font-size: 45px !important;
  margin-top: 100px;
  padding-bottom: 50px;
}

.username,
.email,
.password {
  background-color: transparent;
  padding: 10px 250px 10px 1px;
  border-color: white;
  border-width: 0px 0px 2px 0px;
  color: white;
  transition: 0.9s;
}

.button {
  margin-top: 10px;
  background-color: #8F2113;
  padding: 10px 30px 10px 30px;
  color: white;
  border-radius: 5px;
  transition: 0.3s;
  border-width: 1px;
}

.button:disabled {
  cursor: not-allowed;
}

.loading {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;
  margin-right: 6px;
  vertical-align: middle;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
