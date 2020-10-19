import {mapState} from 'vuex';

export default {
    props: {
      getWidth: {
        type: Number,
        required: true
      },
      songlist: {
        type: Array | undefined,
        required: true,
      },
      currentIndex: {
        type: String | Number,
      },
      route: {
        type: String | Object,
      }
    },
    data() {
        return {
            settings: {
              smallScreen: 1109,
              mobileScreen: 768,
            },
        }
    },
    components: {
        Breadcrumbs : () => import('../../components/utels/Breadcrumbs/Breadcrumbs.vue'),
    },
    computed: {
      ...mapState({
        pageid: state => state.album.albumId,
        pagePlay: state => state.pagePlaying,
      })
    },
    methods: {
      changeSong (payload) {
        this.$store.dispatch('asyncpagePlaying', this.route.page);
        switch(this.route.page) {
          case 'playlist':
            this.$store.dispatch('ayncPlaylistChangeSong', payload).playlist; // replace this one...
            break;
          case 'album':
            this.$store.dispatch('ayncChangeSong', payload).album; // replace this one...
            this.$store.dispatch('AsyncAlbumId', this.route.id).album;
            break;
        }
      },
    },
}