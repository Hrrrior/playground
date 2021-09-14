<template>
  <div class="c-weather card-container">
    <img :v-if="weather.icon === String" :src="'https://openweathermap.org/img/wn/' + weather.icon + '@2x.png'" />
    <div style="text-transform: uppercase;">{{weather.description}}</div>
    <div>{{city}}, {{sys.country}}</div>
    <div>Temp: {{temperature.temp}}°C</div>
    <div>Feels like: {{temperature.feels_like}}°C</div>
    <div>Wind: {{wind.speed}} m/s</div>
    <div>Humidity: {{temperature.humidity}}%</div>
  </div>
</template>
<script lang='js' src='./Weather.js'/>
<style lang='scss' src='./Weather.scss'/>
