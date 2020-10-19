export default {
    data() {
        return {
            settings: {
                mediaWidth: 0,
                smallScreen: 1109,
                mobileScreen: 768,
                route: {
                    page: 'genres',
                },
            },
        }
    },
    components: {
        Breadcrumbs : () => import('../../components/utels/Breadcrumbs/Breadcrumbs.vue'),
    },
    created() {
        window.addEventListener('resize', this.captureResize);
        window.addEventListener('load', this.captureResize);
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.settings.mediaWidth = window.innerWidth
        })
    }
}