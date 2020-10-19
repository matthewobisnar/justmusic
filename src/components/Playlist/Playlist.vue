<template>
    <table class="table table-hover table-playlist">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">Songs</th>
            <th scope="col" v-if="getWidth >= settings.mobileScreen || getWidth == 0">Artists</th>
            <th scope="col" v-if="getWidth >= settings.mobileScreen || getWidth == 0">Album</th>
            <th scope="col" v-if="getWidth >= settings.mobileScreen || getWidth == 0">
                <i class="material-icons">schedule</i>
            </th>
            <th scope="col" v-if="getWidth >= settings.mobileScreen || getWidth == 0"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(song, index) in songlist" :key="index" :class="[index === currentIndex && !route.id && pagePlay == route.page ? 'isPlaying' : index === currentIndex && route.id == pageid && pagePlay == route.page ? 'isPlaying': '' ]">
            <td>
                <div class="preview rounded-circle" @click="changeSong(index)" > 
                    <img :src="song.image" class="image rounded-circle"/>
                    <div class="overlay text-center p-2" :class="{'activeMedia' : index === currentIndex && route.id == pageid && pagePlay == route.page}"> 
                        <i v-if="index !== currentIndex" class="material-icons media-icon">play_arrow</i>
                        <i v-if="index == currentIndex" class="material-icons  media-icon">music_note</i>
                    </div>
                </div>
            </td>
            <td>
                <div class="spinner" v-if="currentIndex === index && route.id && route.id == pageid && pagePlay == route.page">
                    <div class="rect1"></div>
                    <div class="rect2"></div>
                    <div class="rect3"></div>
                    <div class="rect4"></div>
                    <div class="rect5"></div>
                </div>
                <div class="spinner" v-if="currentIndex === index && !route.id && pagePlay == route.page">
                    <div class="rect1"></div>
                    <div class="rect2"></div>
                    <div class="rect3"></div>
                    <div class="rect4"></div>
                    <div class="rect5"></div>
                </div>
                {{song.title}}
                <span class="artistAttach text-muted" v-if="getWidth <= settings.mobileScreen && getWidth != 0">by {{song.artist}}</span>
            </td>
            <td v-if="getWidth >= settings.mobileScreen || getWidth == 0">{{song.artist}}</td>
            <td v-if="getWidth >= settings.mobileScreen || getWidth == 0">{{song.album}}</td>
            <td v-if="getWidth >= settings.mobileScreen || getWidth == 0">{{song.duration}}</td>
            <td v-if="getWidth >= settings.mobileScreen || getWidth == 0">
                <button class="btn btn-sm">
                <i class="material-icons media-icon">tune</i>
                </button>
            </td>
            </tr>
        </tbody>
    </table>
</template>
<script src="./Playlist.js"></script>
<style scoped src="./Playlist.css"></style>