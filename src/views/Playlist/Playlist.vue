<template>
    <div id="playlist">
        <div class="container-fluid">
          <Breadcrumbs :name="'Playlist'"></Breadcrumbs>
          <musiclist :getWidth="settings.mediaWidth" :currentIndex="currentIndex" :songlist="Songslist" :route="settings.route"></musiclist>
        </div>
    </div>
</template>
<script src="./Playlist.js"></script>
<style scoped src="./Playlist.css"></style>