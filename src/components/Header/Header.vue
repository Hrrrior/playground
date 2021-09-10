<template>
  <header class="c-header u-flex">
        <div class="c-header__inner l-container">
            <!-- <router-link :to="{ path: `/` }">
                <img class="c-header__logo" src='@/assets/images/logo.svg'/>
            </router-link> -->
            <ul class="c-menu">
                <li
                    v-for="tab in tabs"
                    :key="tab" >
                        <router-link class="c-menu__link" :to="tab.route">
                        {{tab.tab}}
                        </router-link>
                </li>
            </ul>
        </div>
    </header>
</template>
<script lang='js' src='./Header.js'/>
<style lang='scss' src='./Header.scss'/>
