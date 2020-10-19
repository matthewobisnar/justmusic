import {mapState} from 'vuex';

export default {
    data() {
        return {
            settings: {
                mediaWidth: 0,
                smallScreen: 1109,
                mobileScreen: 768,
                tab: false,
            },

        }
    },
    components: {
        Musiclist: () => import('../../Playlist/Playlist.vue'),
    },
    computed: {
        ...mapState({
            Songs : state => state.songlist,
            selectedSong : state => state.selectedSong,
            isPlaying: state => state.isPlaying,
            songDuration: state => state.songDuration,
            currentDuration: state => state.currentDuration,
            currentProgressBar: state => state.currentProgressBar,
            pagePlaying: state => state.pagePlaying,
        })
    },
    created() {
        window.addEventListener('resize', this.captureResize);
        window.addEventListener('load', this.captureResize);
    },

    methods: {
        toggleTab () {
            this.settings.tab = !this.settings.tab;
        },
        captureResize(e) {
            this.settings.mediaWidth = window.innerWidth;
        },
        trackProgressBar(event) {
            switch(this.pagePlaying) {
                case 'playlist':
                        console.log(event);
                    // this.$store.dispatch('asyncPlaylistPlay').playlist;
                break;
                case 'album':
                    console.log("alubm");
                        // this.$store.dispatch('asyncPlay').album;
                break; 
            }
        },
        play() {
            switch(this.pagePlaying) {
                case 'playlist':
                    this.$store.dispatch('asyncPlaylistPlay').playlist;
                break;
                case 'album':
                        this.$store.dispatch('asyncPlay').album;
                break;
            }
          },
        pause() {
            switch(this.pagePlaying) {
                case 'playlist':
                        this.$store.dispatch('asyncPlaylistPause').playlist;
                break;
                case 'album':
                        this.$store.dispatch('asyncPause').album;
                break;
            }
        },
        forward() {
            switch(this.pagePlaying) {
                case 'playlist':
                        this.$store.dispatch('asyncPlaylistForward').playlist;
                break;
                case 'album':
                        this.$store.dispatch('asyncForward').album;
                break;
            }
        },
        backward () {
            switch(this.pagePlaying) {
                case 'playlist':
                    this.$store.dispatch('asyncPlaylistBackward').playlist;
                break;
                case 'album':
                    this.$store.dispatch('asyncBackward').album;
                break;
            }
        },
        stop() {
            switch(this.pagePlaying) {
                case 'playlist':
                        this.$store.dispatch('asyncPlaylistStop').playlist;
                break;
                case 'album':
                        this.$store.dispatch('asyncStop').album;
                break;
            }
        },
        reset() {
            switch(this.pagePlaying) {
                case 'playlist':
                        this.$store.dispatch('asyncPlaylistReset').playlist;
                break;
                case 'album':
                        this.$store.dispatch('asyncReset').album;
                break;
            }
        }
    },
    filters: {
        toLocalTime (s) {
            return (Math.floor(s * (1/60))) + (s % 60 < 10 ? ":0" : ":") + (s %= 60);
        }
    },
}