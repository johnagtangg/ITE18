<template>
    <div>
        <Navbar />
      <h1>Recipe Search</h1>
      <div>
        <input v-model="query" type="text" placeholder="Enter a recipe search term">
        <button @click="searchRecipes">Search</button>
      </div>
      <ul v-if="recipes.length > 0">
        <li v-for="(recipe, index) in recipes" :key="index">
          <h2>{{ recipe.title }}</h2>
          <p>{{ recipe.description }}</p>
        </li>
      </ul>
      <p v-else>No recipes found.</p>
      <FooterMenu />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        query: '',
        recipes: [],
      };
    },
    methods: {
      async searchRecipes() {
        try {
          const response = await axios.get(`https://api.api-ninjas.com/v1/recipe?query=${this.query}`, {
            headers: {
              'X-Api-Key': 'GwNr6e98MuHxdwAzWC0K9Q==wyN0H98ny0CYrxeE',
            },
          });
          this.recipes = response.data;
        } catch (error) {
            // eslint-disable-next-line no-console
          console.error('Error:', error);
        }
      },
    },
  };
  </script>
  