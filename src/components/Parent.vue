<template>
  <div id="app">
    <div class="main">
      <div class="search-box">
        <input class="search-bar" type="text" placeholder="Search..." v-model="data.city" @keyup.enter="getApi()" />
      </div> 
      
      <div v-if="data.weather" class="content">
        <div class="header">
          <router-link :to="{ path: '/child', query: { data: JSON.stringify(data) } }" class="link-class">
            <h1>{{data.weather.name}}</h1>
          </router-link>
          <h3>{{ new Date().toLocaleString() }}</h3>
        </div>
        <div class="temp">
            <h2>{{Math.round(data.weather.main.temp)}}&deg;</h2>
        </div>
        <div class="state">
            <h3>{{ data.weather.weather[0].main}}</h3>
        </div> 
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
  import axios from "axios";

  export default defineComponent ({// eslint-disable-next-line
    name: 'Parent', 

    data(){
      return{
        data:{
          city:'',
          weather: null,
        }
      }
    },

    mounted: async function(){
      this.getApi()
    },

    methods:{
      async getApi(){
        if(this.data.city===''){
          this.data.city = 'Dharwad';
        }

        const getWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.data.city}&appid=261514ec6ead072a338a344dce0fb58f`);

        console.log(getWeather);

        this.data.weather = getWeather.data;
        this.data.city = '';

      }
    }
  })

</script>

<style scoped>

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'monsterrat',sans-serif;
    color: #2661e0;
  }

  #app{
    background-image: url('../assets/bg.jpg');
    background-size: cover;
  }

  .main{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    text-align: center;
  }

  .search-box .search-bar{
    display: block;
    padding: 1rem;
    font-size: 20px;
    appearance: none;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px 16px 0px 16px;
    transition: 0.4s;
  }

  .search-box .search-bar:focus{
    box-shadow: 0px 0px 16px;
    background-color: rgba(255, 255, 255, 0.75);
  }

  .link-class{
    text-decoration: none;
    color: #2661e0;

  }

  .content{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .temp{
  display: inline-block;
  padding: 10px 25px;
  font-size: 6rem;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0,0,0,0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 1rem;
  box-shadow: 3px 6px rgba(0,0,0,0.25);
  }

  .header{
    font-size: 1.25rem;
    box-shadow: rgba(3,3,3, 0.3);
  }

  .state{
    font-size: 3rem;
    font-style: italic;
    text-shadow: 3px 6px rgba(0,0,0,0.25);
  }
</style>