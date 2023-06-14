<template>
    <div>
      <Navbar />
      <div class="background-image"></div>
      <div class="firstdiv">
      <input v-model="searchQuery" type="text" placeholder="Enter city name" class="timeinput" />
      <button @click="searchTimezone">Search</button>
      <div class="result">
      <p v-if="timezone" class="paragraph">{{ timezone }}</p>
      <p v-if="currentTime" class="paragraph">{{ currentTime }}</p>
    </div>
    </div>
      <div class="secondiv">
      <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">Tools</h2>
      <div class="flex flex-wrap -mx-2">
        <div class="w-full md:w-1/3 px-2">
          <div id="bucket-list" class="bg-white rounded-lg shadow-lg" >
            <img class="w-full h-64 object-cover object-center rounded-t-lg" src="@/static/bucketlist.png">
            <div class="px-4 py-2">
              <h3 class="text-gray-800 font-bold text-xl mb-2">Bucket List Generator</h3>
              <router-link to="/BucketList" class="button">Go to Bucket List</router-link>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-2">
          <div id="recipe" class="bg-white rounded-lg shadow-lg">
            <img class="w-full h-64 object-cover object-center rounded-t-lg" src="@/static/testimoniall.png">
            <div class="px-4 py-2">
              <h3 class="text-gray-800 font-bold text-xl mb-2">Testimonal</h3>
              <router-link to="/testimonial" class="button">Go to Testimonial</router-link>
            </div>
          </div>
        </div>
        </div>
        </div>
      <FooterMenu />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        timezone: '',
        currentTime: '',
        apiKey: 'GwNr6e98MuHxdwAzWC0K9Q==wyN0H98ny0CYrxeE',
      };
    },
    methods: {
      searchTimezone() {
        if (this.searchQuery) {
          const city = encodeURIComponent(this.searchQuery);
  
          this.$axios
            .get(`https://api.api-ninjas.com/v1/timezone?city=${city}`, {
              headers: { 'X-Api-Key': this.apiKey },
            })
            .then((response) => {
              this.timezone = response.data.timezone;
              this.getCurrentTime(response.data.timezone);
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.error('Error:', error);
              this.timezone = 'Error retrieving timezone';
              this.currentTime = '';
            });
        }
      },
      getCurrentTime(timezone) {
        const currentTime = new Date().toLocaleString('en-US', {
          timeZone: timezone,
        });
        this.currentTime = 'Current Time: ' + currentTime;
      },
    },
  };
  </script>
  
<style>

button{
  margin-left: 20px;
  color: white;
  background-color: #13818F;
}

  button:hover{
    background-color: #1F2937;
    color: white;
  }

.firstdiv{
  text-align-last: center;
  padding-top: 50px;
  padding-bottom: 50px;
}

.navbar {
  background-color: #1F2937;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
}

.timeinput {
  border-width: 0px 0px 1px 0px;
  border-color: black;
  padding: 10px 10px 10px 10px;
}

.background-image {
  background-image: url("@/static/TimeZone.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.secondiv{
  padding-top: 50px;
  padding-bottom: 50px;
  margin-right: 30px;
  margin-left: 30px;
}

#bucket-list{
  padding-bottom: 30px;
}

#recipe{
  padding-bottom: 30px;
}

h3{
  padding-bottom: 20px;
}

.paragraph{
  padding-top: 20px;
  text-align: center;
  font-size: 18px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.result{
  border-width: 1px;
  border-color: black;
  margin-top: 50px;
  margin-left: 400px;
  margin-right: 400px;
  padding-top: 50px;
  padding-bottom: 50px;
}

</style>