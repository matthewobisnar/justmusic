import {mapState} from 'vuex';
export default {
    components: {
        Breadcrumbs : () => import('../../components/utels/Breadcrumbs/Breadcrumbs.vue'),
    },
    computed: {
        ...mapState({
            albums: state => state.album.albums
        })
    }
}
