export default {
    props: {
        method: { 
            type: Function ,
            required:true,
        },
    },
    data() {
        return {
            navToggle: false,
            settings:{
                music : [
                    { 
                        link: "/", 
                        name:"Playlist", 
                        iconname:"playlist_play"
                    },
                    { 
                        link: "/artists", 
                        name:"Artists", 
                        iconname:"recent_actors"
                    },
                    { 
                        link: "/genres", 
                        name:"Music genre", 
                        iconname:"library_music"
                    },
                    { 
                        link: "/album", 
                        name:"Music Album", 
                        iconname:"album"
                    },
                ],
                account: [
                    { 
                        link: "#", 
                        name:"Settings", 
                        iconname:"settings_applications"
                    },
                    { 
                        link: "#", 
                        name:"Account", 
                        iconname:"account_circle"
                    },
                    { 
                        link: "#", 
                        name:"Connect", 
                        iconname:"contactless"
                    },
                ]
            }
        }
    },
    methods: {
        toggleNavbar() {
            this.method(this.navToggle = !this.navToggle);
        }
    },
}