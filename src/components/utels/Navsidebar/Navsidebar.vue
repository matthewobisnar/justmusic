<template>
    <div id="sidebar" :class="[navToggle ? 'toggle': 'active']">
        <nav class="navbar navbar-expand navbar-light">
            <h5 class="navbar-brand"><span class="custom-logo1">JUST </span> <span class="custom-logo2">MUSIC</span></h5>
            <span class="ml-auto">
                <button class="view_headlin-btn" @click="toggleNavbar()">
                    <i class="material-icons">menu</i>
                </button>
            </span>
        </nav>
        <div class="listmenu" :class="[navToggle ? 'listmenuToggle': 'activeToggle' ]">
            <h5 class="menuHeader" :class="[navToggle ? 'menuHeaderToggle': 'active']">Music Menu</h5>
            <ul>
                <router-link :to="nav.link" tag="li" href="#" v-for="(nav, index) in settings.music" :key="nav.name + '_' + index">
                    <i class="material-icons md-24 icons" :class="[navToggle ? 'iconsToggle':'active']">{{nav.iconname}}</i> 
                    <span class="navname" :class="[navToggle ? 'navnameToggle' : 'active']">{{nav.name}}</span>
                </router-link>
            </ul>
            <h5 class="menuHeader" :class="[navToggle ? 'menuHeaderToggle': 'active']">Account</h5>
            <ul>
                <router-link to="/" tag="li" v-for="(nav, index) in settings.account" :key="nav.name + '_' + index">     
                    <i class="material-icons md-24 icons" :class="[navToggle ? 'iconsToggle' :'active' ]">{{nav.iconname}}</i>
                    <span class="navname" :class="[navToggle ? 'navnameToggle': 'active']">{{nav.name}}</span>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script src="./Navsidebar.js"></script>
<style scoped src="./Navsidebar.css"></style>