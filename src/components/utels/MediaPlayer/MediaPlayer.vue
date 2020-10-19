<template>
    <div id="player">
        <div class="mediaPlayer" id="mediaPlayer" :class="[settings.mediaWidth >= settings.smallScreen || settings.mediaWidth == 0 ? '': 'mediaPlayerMobile']">
            <transition name="fade">
            <div class="container-fluid" v-if="selectedSong != ''">
                <div class="row">
                    <div class="col-4 col-xs col" v-if="settings.mediaWidth >= settings.mobileScreen || settings.mediaWidth == 0">
                        <div class="media">
                            <img class="mr-2 media-custom" :src="selectedSong.image" alt="Generic placeholder image">
                            <div class="media-body">
                                <span class="songtitle">{{selectedSong.title}}</span>
                                <span class="songartist">{{selectedSong.artist}} - {{selectedSong.duration}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col col-xs" :class="[settings.mediaWidth <= settings.mobileScreen || settings.mediaWidth == 0 ? 'my-2': '']">
                        <div class="d-flex text-center bd-highlight">
                            <div class="flex-fill text-center justify-content-center bd-highlight">
                                <button class="media-btn" @click="reset()">
                                    <i class="material-icons media-icon">restore</i>
                                </button>
                            </div>
                            <div class="d-flex flex-nowrap text-left justify-content-center bd-highlight">
                                <div class="order-1">
                                    <button class="media-btn"  @click="backward()">
                                        <i class="material-icons media-icon md-24">fast_rewind</i>
                                    </button>
                                </div>
                                <div class="order-2">
                                    <button class="media-btn" @click="play()" v-if="!isPlaying">
                                        <i class="material-icons media-icon md-24">play_arrow</i>
                                    </button>
                                    <button class="media-btn" @click="pause()" v-if="isPlaying">
                                        <i class="material-icons media-icon">pause</i>
                                    </button>
                                </div>
                                <div class="order-3">
                                    <button class="media-btn" @click="forward()">
                                        <i class="material-icons media-icon md-24">fast_forward</i>
                                    </button>                           
                                </div>
                            </div>
                            <div class="flex-fill text-center justify-content-center bd-highlight">
                                <button class="media-btn" @click="stop()">
                                    <i class="material-icons media-icon md-24">stop</i>
                                </button>
                            </div>
                        </div>
                        <!-- progress bar -->
                        <div class="d-flex bd-highlight" v-if="settings.mediaWidth >= settings.mobileScreen || settings.mediaWidth == 0">
                            <div class="px-2 text-center custom-h bd-highlight">{{currentDuration | toLocalTime}}</div>
                            <div class="flex-fill bd-highlight">
                                <div class="col col-custom">
                                    <div class="progress bg-progress" @click="trackProgressBar($event)">
                                        <div class="progress-bar bg-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" :style="{width: currentProgressBar + '%'}"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 custom-h text-center bd-highlight">{{songDuration | toLocalTime}}</div>
                        </div>
                    </div>
                    <!-- Volume-->
                    <div class="col col-xs col-volume">
                        <div class="d-flex volume-colume justify-content-center">
                            <div class="flex-fill" :class="[settings.mediaWidth >= 915 || settings.mediaWidth == 0 ? 'text-right': 'text-left']">
                                    <button class="btn btn-lg" @click="toggleTab()">
                                        <i class="material-icons">view_list</i>
                                    </button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </transition>
        </div>
        <div class="slider" :class="[!settings.tab ? 'closed' : 'active' ]">
            <div class="container-fluid">
                <transition name="fade">
                    <div v-if="settings.tab">
                        <!-- <musiclist :getWidth="settings.mediaWidth" :songlist="Songs" ></musiclist> -->
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
<script src="./MediaPlayer.js"></script>
<style scoped src="./MediaPlayer.css"></style>