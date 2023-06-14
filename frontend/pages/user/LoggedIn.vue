<template>
  <div>
    <Navbar />
    <figure>
      <img src="@/static/Travel Tales and Trails.png" alt="home1" class="home2">
    </figure>
    <div class="container">
      <div class="box">
        <p class="about">Travel Tales and Trails is your ultimate travel companion, bringing you captivating stories, 
          practical tips, and immersive destination guides. Join our vibrant community of travelers as we explore the 
          world's most enchanting locations, share our adventures, and inspire each other to embark on unforgettable journeys. 
          From hidden gems to iconic landmarks, let us be your guide to discovering the beauty and wonder that awaits you around 
          the globe. Get ready to ignite your wanderlust and create your own extraordinary travel tales with Travel Tales and Trails.</p>
      </div>
    </div>
    <div class="secondiv">
      <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">Tools</h2>
      <div class="flex flex-wrap -mx-2">
        <div class="w-full md:w-1/3 px-2">
          <div class="bg-white rounded-lg shadow-lg">
            <img class="w-full h-64 object-cover object-center rounded-t-lg" src="@/static/clock.png">
            <div class="px-4 py-2">
              <h3 class="text-gray-800 font-bold text-xl mb-2">Time Zone</h3>
              <router-link to="/TimeZone" class="button">Go to Time Zone</router-link>
              <div class="white"></div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-2">
          <div class="bg-white rounded-lg shadow-lg">
            <img class="w-full h-64 object-cover object-center rounded-t-lg" src="@/static/bucketlist.png">
            <div class="px-4 py-2">
              <h3 class="text-gray-800 font-bold text-xl mb-2">Bucket List Generator</h3>
              <router-link to="/BucketList" class="button">Go to Bucket List</router-link>
              <div class="white"></div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-2">
          <div class="bg-white rounded-lg shadow-lg">
            <img class="w-full h-64 object-cover object-center rounded-t-lg" src="@/static/testimoniall.png">
            <div class="px-4 py-2">
              <h3 class="text-gray-800 font-bold text-xl mb-2">Testimonial</h3>
              <router-link to="/testimonial" class="button">Go to Testimonial</router-link>
              <div class="white"></div>
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
  auth: 'user',
  methods: {
    async logout() {
      await this.$auth.logout();
      window.location.href = 'http://localhost:3000/';
    },
  },
};
</script>

<style>


img{
  justify-content: center;
  align-items: center;
  display: flex;
}

.button{
  margin-top: 10px;
  background-color: #8F2113;
  padding: 10px 30px;
  color: white;
  border-width: 1px;
  border-radius: 5px;
  transition: 0.3s;
}

.button:hover{
  background-color: #13818F;
  border-color: #19AABC;
  border-width: 1px;
  color: #FFFFFF;
}

.logoutbutton{
  margin-top: 10px;
  background-color: #8F2113;
  padding: 10px 30px;
  color: white;
  border-radius: 5px;
  transition: 0.3s;
}

.logoutbutton:hover{
  background-color: #13818F;
  color: #FFFFFF;
}

.secondiv{
  padding-top: 50px;
  padding-bottom: 50px;
  margin-right: 30px;
  margin-left: 30px;
}

.home2 img{
  height: 100px !important;
}

.container {
  display: flex;
  padding-top: 20px;
}

.box {
  flex: 1;
  background-color: #eaeaea;
  border: 1px solid #ccc;
  height: 250px;
  margin-right: 250px;
  margin-left: 250px;
  margin-top: -200px;
}

.about{
  padding: 50px 50px 50px 50px;
  font-size: 18px;
  font-family: sans-serif;
}

h3{
  padding-bottom: 30px;
}

.white{
  padding-top: 30px;
}

</style>
