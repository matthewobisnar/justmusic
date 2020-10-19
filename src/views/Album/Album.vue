<template>
        <div id="album">
            <div class="jumbotron">
                <div class="row" :class="[(settings.mediaWidth >= settings.smallScreen) || settings.mediaWidth == 0 ? 'col-md-6': 'col-md-12']">
                    <div class="media">
                        <div class="hovereffect">
                            <div class="media-left" v-if="(settings.mediaWidth >= settings.mobileScreen) || settings.mediaWidth == 0">
                                <img :src="SelectedAlbum.image" class="media-object rounded-0">
                            </div>
                            <div class="overlay">
                                <div class="text">
                                    <i class="material-icons md-48">play_arrow</i>
                                </div>
                            </div>
                        </div>
                        <div class="media-body ml-3">
                            <h5 class="media-heading">{{SelectedAlbum.album}}</h5>
                            <p>Artists: {{SelectedAlbum.artist}}<br/>
                            Date Release: {{SelectedAlbum.release}}</p>
                            <p>{{SelectedAlbum.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <Musiclist :getWidth="settings.mediaWidth" :songlist="SelectedAlbum.songs" :currentIndex="currentIndex" :route="settings.route"></Musiclist>
            </div>
        </div>
</template>
<script src="./Album.js"></script>
<style scoped src="./Album.css"></style>