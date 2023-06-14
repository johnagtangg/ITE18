<template>
  <div>
    <Navbar />
    <div class="background-images"></div>
    <h1 class="h1">Random Bucket List Generator</h1>
    <button class="generate" @click="generateBucketList">Generate New Bucket List</button>
    <div class="li">
      <ul>
        <li v-for="(item, index) in bucketList" :key="index">Random Bucket List Goal:<br>
          {{ item }}
        </li>
      </ul>
    </div>
    <div v-if="editingIndex !== -1">
      <input v-model="editedItem" type="text" placeholder="Edit item">
      <button @click="saveEdit">Save</button>
      <button @click="cancelEdit">Cancel</button>
    </div>
    <div class="secondiv">
      <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">Explore</h2>
      <div class="flex flex-wrap -mx-2">
        <div class="w-full md:w-1/3 px-2">
          <div id="bucket-list" class="bg-white rounded-lg shadow-lg">
            <img class="w-full h-64 object-cover object-center rounded-t-lg" src="@/static/clock.png">
            <div class="px-4 py-2">
              <h3 class="text-gray-800 font-bold text-xl mb-2">Time Zone</h3>
              <router-link to="/TimeZone" class="button">Go to Time Zone</router-link>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-2">
          <div id="bucket-list" class="bg-white rounded-lg shadow-lg">
            <img class="w-full h-64 object-cover object-center rounded-t-lg" src="@/static/testimoniall.png">
            <div class="px-4 py-2">
              <h3 class="text-gray-800 font-bold text-xl mb-2">Testimonial</h3>
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
import axios from 'axios';

export default {
  data() {
    return {
      bucketList: [],
      newItem: '',
      editingIndex: -1,
      editedItem: '',
    };
  },
  mounted() {
    this.fetchBucketList();
  },
  methods: {
    async fetchBucketList() {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/bucketlist', {
          headers: {
            'X-Api-Key': 'GwNr6e98MuHxdwAzWC0K9Q==wyN0H98ny0CYrxeE',
          },
        });
        this.bucketList = response.data;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error:', error);
      }
    },
    addItem() {
      if (this.newItem.trim() !== '') {
        this.bucketList.push(this.newItem.trim());
        this.newItem = '';
      }
    },
    editItem(index) {
      this.editingIndex = index;
      this.editedItem = this.bucketList[index];
    },
    saveEdit() {
      if (this.editedItem.trim() !== '') {
        this.bucketList[this.editingIndex] = this.editedItem.trim();
        this.cancelEdit();
      }
    },
    cancelEdit() {
      this.editingIndex = -1;
      this.editedItem = '';
    },
    removeItem(index) {
      this.bucketList.splice(index, 1);
    },
    generateBucketList() {
      this.bucketList = [];
      this.fetchBucketList();
    },
  },
};
</script>

<style>
/* Existing styles... */

h1 {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 48px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 700;
}

.generate{
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 30px;
}

.li li {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  border-width: 1px;
  border-color: black;
  margin-left: 450px;
  margin-right: 450px;
  font-size: 24px;
  font-weight: 600;
}

.background-images {
  background-image: url("@/static/bucket-list.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.secondiv {
  padding-top: 50px;
  padding-bottom: 50px;
  margin-right: 30px;
  margin-left: 30px;
}

#bucket-list {
  padding-bottom: 30px;
}

h3 {
  padding-bottom: 20px;
}

button{
  text-align: center;
}

button{
  margin-left: 20px;
  color: white;
  background-color: #13818F;
}

  button:hover{
    background-color: #1F2937;
    color: white;
  }

  .white{
  padding-top: 30px;
}


</style>
