import {mapState, mapGetters} from 'vuex';

export default {
    data() {
        return {
            settings: {
                mediaWidth: 0,
                smallScreen: 1109,
                mobileScreen: 768,
                route: {
                    page: 'playlist',
                },
            },
        }
    },
    computed: {
        ...mapState({
            Songslist : state => state.playlist.playlist,
            currentIndex: state => state.playlist.currentSongIndex,
        })
    },
    methods: {
        captureResize() {
            this.settings.mediaWidth = window.innerWidth;
        }
    },
    components: {
        Breadcrumbs : () => import('../../components/utels/Breadcrumbs/Breadcrumbs.vue'),
        Musiclist: () => import('../../components/Playlist/Playlist.vue')
    },
    created() {
        window.addEventListener('resize', this.captureResize);
        window.addEventListener('load', this.captureResize);
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.settings.mediaWidth = window.innerWidth;

            localStorage.setItem('playlist', JSON.stringify(vm.Songslist));
            vm.$store.dispatch('asyncSonglist', JSON.parse(localStorage.getItem('playlist'))).playlist;
        })
    },
}