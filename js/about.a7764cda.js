(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"23cd":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"Artists"}},[i("div",{staticClass:"container-fluid"},[i("Breadcrumbs",{attrs:{name:"Artists"}})],1)])},s=[],r={data:function(){return{settings:{mediaWidth:0,smallScreen:1109,mobileScreen:768,route:{page:"artists"}}}},components:{Breadcrumbs:function(){return i.e("chunk-2d0de571").then(i.bind(null,"84dc"))}},created:function(){window.addEventListener("resize",this.captureResize),window.addEventListener("load",this.captureResize)},beforeRouteEnter:function(t,e,i){i(function(t){t.settings.mediaWidth=window.innerWidth})}},a=r,c=(i("c425"),i("2877")),u=Object(c["a"])(a,n,s,!1,null,"bb901566",null);e["default"]=u.exports},"25dc":function(t,e,i){"use strict";var n=i("f2e5"),s=i.n(n);s.a},"5a75":function(t,e,i){"use strict";var n=i("6f20"),s=i.n(n);s.a},"62cd":function(t,e,i){},"6f20":function(t,e,i){},7190:function(t,e,i){},"78f8":function(t,e,i){"use strict";var n=i("62cd"),s=i.n(n);s.a},"9ff0":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"Musicalbum"}},[i("div",{staticClass:"container-fluid"},[i("Breadcrumbs",{attrs:{name:"Album"}}),i("div",{staticClass:"albumlist my-4 py-1"},[i("div",{staticClass:"row"},t._l(t.albums,function(e,n){return i("div",{key:e.title+"_"+n,staticClass:"col-xs-2 col-lg-2 mx-4"},[i("router-link",{attrs:{to:{name:"albumiid",params:{id:e.id,album:e}},tag:"div"}},[i("div",{staticClass:"hovereffect"},[i("img",{staticClass:"card-img-top card-album rounded-0",attrs:{src:e.image,alt:"Card image cap"}}),i("div",{staticClass:"overlay"},[i("div",{staticClass:"text"},[i("i",{staticClass:"material-icons md-48"},[t._v("play_arrow")])])])])]),i("div",{staticClass:"card-body px-1"},[i("p",{staticClass:"font-weight-bold"},[t._v(t._s(e.album))]),i("p",[t._v(t._s(e.description))])])],1)}),0)])],1)])},s=[],r=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),a=i("2f62");function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(i,!0).forEach(function(e){Object(r["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var o={components:{Breadcrumbs:function(){return i.e("chunk-2d0de571").then(i.bind(null,"84dc"))}},computed:u({},Object(a["b"])({albums:function(t){return t.album.albums}}))},d=o,l=(i("5a75"),i("2877")),m=Object(l["a"])(d,n,s,!1,null,"1d1c2f74",null);e["default"]=m.exports},b827:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"album"}},[i("div",{staticClass:"jumbotron"},[i("div",{staticClass:"row",class:[t.settings.mediaWidth>=t.settings.smallScreen||0==t.settings.mediaWidth?"col-md-6":"col-md-12"]},[i("div",{staticClass:"media"},[i("div",{staticClass:"hovereffect"},[t.settings.mediaWidth>=t.settings.mobileScreen||0==t.settings.mediaWidth?i("div",{staticClass:"media-left"},[i("img",{staticClass:"media-object rounded-0",attrs:{src:t.SelectedAlbum.image}})]):t._e(),t._m(0)]),i("div",{staticClass:"media-body ml-3"},[i("h5",{staticClass:"media-heading"},[t._v(t._s(t.SelectedAlbum.album))]),i("p",[t._v("Artists: "+t._s(t.SelectedAlbum.artist)),i("br"),t._v("\n                    Date Release: "+t._s(t.SelectedAlbum.release))]),i("p",[t._v(t._s(t.SelectedAlbum.description))])])])])]),i("div",{staticClass:"container-fluid"},[i("Musiclist",{attrs:{getWidth:t.settings.mediaWidth,songlist:t.SelectedAlbum.songs,currentIndex:t.currentIndex,route:t.settings.route}})],1)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"overlay"},[i("div",{staticClass:"text"},[i("i",{staticClass:"material-icons md-48"},[t._v("play_arrow")])])])}],r=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),a=i("2f62");function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(i,!0).forEach(function(e){Object(r["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var o={data:function(){return{settings:{mediaWidth:0,smallScreen:1109,mobileScreen:768,route:{page:"album",id:""},activeMedia:!0},Songs:{list:[]}}},methods:{captureResize:function(){this.settings.mediaWidth=window.innerWidth}},computed:u({},Object(a["b"])({SelectedAlbum:function(t){return t.album.selectedAlbum},currentIndex:function(t){return t.album.currentSongIndex},isPlaying:function(t){return t.isPlaying}})),components:{Musiclist:function(){return i.e("chunk-0ee585ac").then(i.bind(null,"523b"))}},created:function(){window.addEventListener("resize",this.captureResize),window.addEventListener("load",this.captureResize)},beforeRouteEnter:function(t,e,i){i(function(t){t.settings.mediaWidth=window.innerWidth,t.settings.route.id=t.$route.params.id,void 0!==t.$route.params.album&&localStorage.setItem("album",JSON.stringify(t.$route.params.album)),t.$store.dispatch("asyncSelectAlbum",JSON.parse(localStorage.getItem("album"))).album,t.$store.dispatch("asyncaAlbumSongsList",JSON.parse(localStorage.getItem("album")).songs).album})},beforeRouteLeave:function(t,e,i){this.$store.dispatch("asyncSelectAlbum","").album,this.$store.dispatch("asyncaAlbumSongsList",[]).album,i()}},d=o,l=(i("78f8"),i("2877")),m=Object(l["a"])(d,n,s,!1,null,"d214e072",null);e["default"]=m.exports},c425:function(t,e,i){"use strict";var n=i("7190"),s=i.n(n);s.a},d1d2:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"genres"}},[i("div",{staticClass:"container-fluid"},[i("Breadcrumbs",{attrs:{name:"Genres"}})],1)])},s=[],r={data:function(){return{settings:{mediaWidth:0,smallScreen:1109,mobileScreen:768,route:{page:"genres"}}}},components:{Breadcrumbs:function(){return i.e("chunk-2d0de571").then(i.bind(null,"84dc"))}},created:function(){window.addEventListener("resize",this.captureResize),window.addEventListener("load",this.captureResize)},beforeRouteEnter:function(t,e,i){i(function(t){t.settings.mediaWidth=window.innerWidth})}},a=r,c=(i("25dc"),i("2877")),u=Object(c["a"])(a,n,s,!1,null,"5ef34ffd",null);e["default"]=u.exports},f2e5:function(t,e,i){}}]);
//# sourceMappingURL=about.a7764cda.js.map