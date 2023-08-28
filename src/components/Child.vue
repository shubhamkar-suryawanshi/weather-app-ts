<template>
<div class="child">
    <div class="content">
        <div class="header">
            <h1>{{ JSON.parse($route.query.data).weather.name }}</h1>
            <h3>{{ new Date().toLocaleString() }}</h3>
        </div>
        <div class="temp">
            <h2>{{Math.round(JSON.parse($route.query.data).weather.main.temp)}}&deg;</h2>
        </div> 
        <div class="state">
            <h3>{{ JSON.parse($route.query.data).weather.weather[0].main}}</h3>
        </div>
    </div>
</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

    export default defineComponent ({// eslint-disable-next-line
        name: 'Child', 
        
    })

</script>

<style scoped>

    .child{
        background-image: url('../assets/bg.jpg');
        background-size: cover;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

  .content{
    width: 30%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    color: #2661e0;
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