import {mapState} from 'vuex';

export default {
    data() {
        return {
            settings: {
                mediaWidth: 0,
                smallScreen: 1109,
                mobileScreen: 768,
                route: {
                    page: 'album',
                    id: ''
                },
                activeMedia: true,
            },
            Songs: {
                list: []
            }
        }
    },
    methods: {
        captureResize() {
            this.settings.mediaWidth = window.innerWidth;
        },
    },
    computed: {
        ...mapState({
            SelectedAlbum : state => state.album.selectedAlbum,
            currentIndex: state => state.album.currentSongIndex,
            isPlaying : state => state.isPlaying,
        })
    },
    components: {
        Musiclist: () => import('../../components/Playlist/Playlist.vue')
    },
    created() {
        window.addEventListener('resize', this.captureResize);
        window.addEventListener('load', this.captureResize);
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.settings.mediaWidth = window.innerWidth;
            vm.settings.route.id = vm.$route.params.id;

            if (vm.$route.params.album !== undefined) {
                localStorage.setItem('album', JSON.stringify(vm.$route.params.album));
            }

            vm.$store.dispatch('asyncSelectAlbum', JSON.parse(localStorage.getItem('album'))).album;
            vm.$store.dispatch('asyncaAlbumSongsList', JSON.parse(localStorage.getItem('album')).songs).album;
        })
    },

    beforeRouteLeave (to, from, next) {

        // if(!this.isPlaying) {
        //     this.$store.dispatch('AsyncAlbumId', '').album;
        // }

        this.$store.dispatch('asyncSelectAlbum', '').album;
        this.$store.dispatch('asyncaAlbumSongsList', []).album;
        next();
    }
}