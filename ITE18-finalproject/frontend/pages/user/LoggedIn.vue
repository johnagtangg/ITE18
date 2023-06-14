<template>
  <div>
  <div class="bg-gray-800 py-4 px-4">
    <NuxtLink class="text-white p-2 hover:bg-gray-700" to="/">Home</NuxtLink>
    <button
        class="logoutbutton"
        @click="logout"
      >
        Sign Out
      </button>
  </div>
<figure><img src="@/static/Travel Tales and Trails.png" alt="home1" class="home2"></figure>
<div class="container">
    <div class="box">
      <p class="about">Travel Tales and Trails is your ultimate travel companion, bringing you captivating stories, 
        practical tips, and immersive destination guides. Join our vibrant community of travelers as we 
        explore the world's most enchanting locations, share our adventures, and inspire each other to 
        embark on unforgettable journeys. From hidden gems to iconic landmarks, let us be your guide to 
        discovering the beauty and wonder that awaits you around the globe. Get ready to ignite your 
        wanderlust and create your own extraordinary travel tales with Travel Tales and Trails.</p>
    </div>
  </div>
  <div class="secondiv">
        <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">Features</h2>
        <div class="flex flex-wrap -mx-2">
          <div class="w-full md:w-1/3 px-2">
            <div class="bg-white rounded-lg shadow-lg">
              <img class="w-full h-64 object-cover object-center rounded-t-lg" src="@/static/news.png">
              <div class="px-4 py-2">
                <h3 class="text-gray-800 font-bold text-xl mb-2">News Update</h3>
                <button class="button">Use Feature</button>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-2">
            <div class="bg-white rounded-lg shadow-lg">
              <img class="w-full h-64 object-cover object-center rounded-t-lg" src="@/static/weather.png">
              <div class="px-4 py-2">
                <h3 class="text-gray-800 font-bold text-xl mb-2">Weather Forecast</h3>
                <button class="button">Use Feature</button>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-2">
            <div class="bg-white rounded-lg shadow-lg">
              <img class="w-full h-64 object-cover object-center rounded-t-lg" src="@/static/spot.png">
              <div class="px-4 py-2">
                <h3 class="text-gray-800 font-bold text-xl mb-2">Tourist Spot Map</h3>
                <button class="button">Use Feature</button>
              </div>
            </div>
          </div>
        </div>
  </div>
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
  padding: 10px 30px 10px 30px;
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
  padding: 10px 30px 10px 30px;
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

</style>