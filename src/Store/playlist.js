export default {
    state: {
        playlistId: '',
        songlist: [],
        isPlaying: false,
        currentSongIndex: '',
        playlist: [
          { 
            id:2,
            image: "https://static.lafeltrinelli.it/static/images-3/xxl/309/7914309.jpg", 
            title:"Aftertaste", 
            artist: "Shawn Mendes", 
            album: "Illuminate", 
            duration:"2:46", 
            path: 'https://archive.org/download/shawnmendesunderstandaudio/Shawn%20Mendes%20-%20Aftertaste%20%28Lyrics%29%20Studio.mp3'
          },
          { 
            id:1,
            image: "https://static.lafeltrinelli.it/static/images-3/xxl/309/7914309.jpg", 
            title:"Dont Be A Fool", 
            artist: "Shawn Mendes", 
            album: "Illuminate", 
            duration:"3:36", 
            path: 'https://archive.org/download/shawnmendesunderstandaudio/Shawn%20Mendes%20-%20Dont%20Be%20A%20Fool%20%28audio%29.mp3'
          },
          { 
            id:2,
            image: "https://static.lafeltrinelli.it/static/images-3/xxl/309/7914309.jpg", 
            title:"Lights On", 
            artist: "Shawn Mendes", 
            album: "Illuminate", 
            duration:"3:22", 
            path: 'https://archive.org/download/shawnmendesunderstandaudio/Shawn%20Mendes%20-%20Lights%20On%20%28%20audio%29.mp3'
          },
          { 
            id:3,
            image: "https://static.lafeltrinelli.it/static/images-3/xxl/309/7914309.jpg", 
            title:"Understand", 
            artist: "Shawn Mendes", 
            album: "Illuminate", 
            duration:"5:01", 
            path: 'https://archive.org/download/shawnmendesunderstandaudio/Shawn%20Mendes%20-%20Understand%20%28audio%29.mp3'
          },
          // { 
          //   id: 'ia601407',
          //   image: "http://www.fouroverfour.jukely.com/wp-content/uploads/2017/01/Leroy-Sanchez.jpg", 
          //   title:"Never Really Over", 
          //   artist: "Cover by Leroy Sanchez", 
          //   album: "Leroy Sanchez", 
          //   duration:"4:29", 
          //   path: 'https://ia601407.us.archive.org/11/items/katyperryneverreallyovercoverbyleroysanchez/KATY%20PERRY%20-%20Never%20Really%20Over%20%28Cover%20by%20Leroy%20Sanchez%29.mp3'
          // },
          // { 
          //   id:'ia601408',
          //   image: "http://www.fouroverfour.jukely.com/wp-content/uploads/2017/01/Leroy-Sanchez.jpg", 
          //   title:"If I Can't Have You", 
          //   artist: "Cover by Leroy Sanchez", 
          //   album: "Leroy Sanchez", 
          //   duration:"3:50", 
          //   path: 'https://ia601507.us.archive.org/2/items/shawnmendesificanthaveyoucoverbyleroysanchez/SHAWN%20MENDES%20-%20If%20I%20Can%27t%20Have%20You%20%28Cover%20by%20Leroy%20Sanchez%29.mp3'
          // },
          // { 
          //   id: 'ia801504',
          //   image: "https://i1.sndcdn.com/avatars-000520361715-4dr7nr-t500x500.jpg", 
          //   title:"Love Someone", 
          //   artist: "Cover by Leroy Sanchez", 
          //   album: "Leroy Sanchez", 
          //   duration:"3:08", 
          //   path: 'https://ia801504.us.archive.org/10/items/lukasgrahamlovesomeonecoverbyleroysanchez/Lukas%20Graham%20-%20LOVE%20SOMEONE%20%28Cover%20by%20Leroy%20Sanchez%29.mp3'
          // },
          // { 
          //   id:4,
          //   image: "https://www.scoutmag.ph/wp-content/uploads/2019/03/Screen-Shot-2019-03-19-at-9.18.13-AM.png", 
          //   title:"Get You x Redbone", 
          //   artist: "Daniel Caesar (JamieBoy Cover)", 
          //   album: "JamieBoy", 
          //   duration:"3:21", 
          //   path: 'https://ia801502.us.archive.org/20/items/getyouxredbonedanielcaesarchildishgambinojamieboycover/Get%20You%20x%20Redbone%20-%20Daniel%20Caesar%20%26%20Childish%20Gambino%20%28JamieBoy%20Cover%29.mp3'
          // },
          // { 
          //   id:5,
          //   image: "https://www.hellomagazine.com/imagenes/celebrities/2017012336032/Ed-Sheeran-younger-doppelganger-music-video/0-194-667/ed-new-t.jpg", 
          //   title:"Best Part Of Me", 
          //   artist: "Ed Sheeran (feat. YEBBA)", 
          //   album: "Ed Sheeran", 
          //   duration:"4:08", 
          //   path: 'https://ia801404.us.archive.org/17/items/edsheeranbestpartofmefeat.yebbaliveatabbeyroad/Ed%20Sheeran%20-%20Best%20Part%20Of%20Me%20%28feat.%20YEBBA%29%20%28Live%20At%20Abbey%20Road%29.mp3'
          // },
          // { 
          //   id:6,
          //   image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
          //   title:"Thursday", 
          //   artist: "Jess Glynne x Ed Sheeran", 
          //   album: "Ed Sheeran", 
          //   duration:"4:08", 
          //   path: 'https://ia601508.us.archive.org/18/items/jessglynnexedsheeranthursdayacoustic/Jess%20Glynne%20x%20Ed%20Sheeran%20-%20Thursday%20%5BAcoustic%5D.mp3'
          // },
          // { 
          //   id:7,
          //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxS-GgJ-c5zQsXVMfl_UEfdzHg9Nryq-uSYbyQNuy2pF-HhvXOQ", 
          //   title:"Your Song", 
          //   artist: "Rita Ora ft Ed Sheeran", 
          //   album: "Ed Sheeran", 
          //   duration:"4:08", 
          //   path: 'https://ia801406.us.archive.org/16/items/ritaorayoursongft.edsheeran/Rita%20OraYour%20Song%20%28ft.%20Ed%20Sheeran%29.mp3'
          // },
          // { 
          //   id:8,
          //   image: "https://i.guim.co.uk/img/media/ea014c51de0a5c96fac2a1ef939c36e6a4a6b5e7/0_181_1448_1810/master/1448.jpg?width=300&quality=85&auto=format&fit=max&s=100eb26d484ea20742eac971a6a5c0a0", 
          //   title:"Beautiful People", 
          //   artist: "Ed Sheeran", 
          //   album: "Ed Sheeran", 
          //   duration:"4:08", 
          //   path: 'https://ia801501.us.archive.org/4/items/edsheeranbeautifulpeopleliveatabbeyroad1/Ed%20Sheeran%20-%20Beautiful%20People%20%28Live%20At%20Abbey%20Road%29%20%281%29.mp3'
          // },
          { 
              id:9,
              image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
              title:"I Don't Care", 
              artist: "Ed Sheeran ft. Justin Bieber", 
              album: "Ed Sheeran", 
              duration:"3:43", 
              path: 'https://archive.org/download/edsheeranperfectofficialmusicvideo_201909/Ed%20Sheeran%20%26%20Justin%20Bieber%20-%20I%20Don%27t%20Care%20%5BOfficial%20Video%5D.mp3'
            },
            { 
              id:10,
              image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
              title:"Antisocial", 
              artist: "Ed Sheeran", 
              album: "X Album", 
              duration:"3:28", 
              path: 'https://archive.org/download/edsheeranperfectofficialmusicvideo_201909/Ed%20Sheeran%20%26%20Travis%20Scott%20-%20Antisocial%20%5BOfficial%20Video%5D.mp3'
            },
            { 
              id:11,
              image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
              title:"Cross Me", 
              artist: "Ed Sheeran feat. Chance The Rapper & PnB Rock", 
              album: "X Album", 
              duration:"3:26", 
              path: 'https://archive.org/download/edsheeranperfectofficialmusicvideo_201909/Ed%20Sheeran%20-%20Cross%20Me%20%28feat.%20Chance%20The%20Rapper%20%26amp%20PnB%20Rock%29%20%5BOfficial%20Lyric%20Video%5D.mp3'
            },
            { 
              id:12,
              image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
              title:"Nothing On You ", 
              artist: "Ed Sheeran (feat. Paulo Londra & Dave)", 
              album: "X Album", 
              duration:"3:32", 
              path: 'https://archive.org/download/edsheeranperfectofficialmusicvideo_201909/Ed%20Sheeran%20-%20Nothing%20On%20You%20%28feat.%20Paulo%20Londra%20%26%20Dave%29%20%5BSBTV%5D.mp3'
            },
            { 
              id:13,
              image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
              title:"Perfect", 
              artist: "Ed Sheeran", 
              album: "X Album", 
              duration:"4:40", 
              path: 'https://archive.org/download/edsheeranperfectofficialmusicvideo_201909/Ed%20Sheeran%20-%20Perfect%20%28Official%20Music%20Video%29.mp3'
            },
            { 
              id:14,
              image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
              title:"Shape Of You", 
              artist: "Ed Sheeran", 
              album: "X Album", 
              duration:"4:23", 
              path: 'https://archive.org/download/edsheeranperfectofficialmusicvideo_201909/Ed%20Sheeran%20-%20Shape%20of%20You%20%5BOfficial%20Video%5D.mp3'
            },
            { 
              id:15,
              image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
              title:"South of the Border", 
              artist: "Ed Sheeran (feat. Camila Cabello & Cardi B)", 
              album: "X Album", 
              duration:"3:24", 
              path: 'https://archive.org/download/edsheeranperfectofficialmusicvideo_201909/Ed%20Sheeran%20-%20South%20of%20the%20Border%20%28feat.%20Camila%20Cabello%20%26%20Cardi%20B%29%20%5BOfficial%20Lyric%20Video%5D.mp3'
            },
            { 
              id:16,
              image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
              title:"Take Me Back To London", 
              artist: "Ed Sheeran", 
              album: "X Album", 
              duration:"5:52", 
              path: 'https://archive.org/download/edsheeranperfectofficialmusicvideo_201909/Ed%20Sheeran%20-%20Take%20Me%20Back%20To%20London%20%28Sir%20Spyro%20Remix%29%20%5Bfeat.%20Stormzy%2C%20Jaykae%20%26%20Aitch%5D.mp3'
            },
            { 
              id:17,
              image: "https://i1.sndcdn.com/avatars-000520361715-4dr7nr-t500x500.jpg", 
              title:"How Not To Love You", 
              artist: "Leroy Sanchez", 
              album: "Elevated", 
              duration:"3:17", 
              path: 'https://archive.org/download/leroysanchezletyougoepelevatedavailableonspotifyanditunes/LEROY%20SANCHEZ%20-%20How%20Not%20To%20Love%20You%20%28EP%20Elevated%20available%20on%20Spotify%20and%20iTunes%29.mp3'
            },
            { 
              id:18,
              image: "https://i1.sndcdn.com/avatars-000520361715-4dr7nr-t500x500.jpg", 
              title:"Let You Go", 
              artist: "Leroy Sanchez", 
              album: "Elevated", 
              duration:"3:58", 
              path: 'https://ia801409.us.archive.org/29/items/leroysanchezletyougoepelevatedavailableonspotifyanditunes/LEROY%20SANCHEZ%20-%20Let%20You%20Go%20%28EP%20Elevated%20available%20on%20Spotify%20and%20iTunes%29.mp3'
            },
            { 
              id:19,
              image: "https://i1.sndcdn.com/avatars-000520361715-4dr7nr-t500x500.jpg", 
              title:"Man of the Year", 
              artist: "Leroy Sanchez", 
              album: "Elevated", 
              duration:"3:30", 
              path: 'https://archive.org/download/leroysanchezletyougoepelevatedavailableonspotifyanditunes/Leroy%20Sanchez%20-%20Man%20of%20the%20Year%20%28Lyric%20Video%29.mp3'
            },
            { 
              id:20,
              image: "https://i1.sndcdn.com/avatars-000520361715-4dr7nr-t500x500.jpg", 
              title:"Preacher", 
              artist: "Leroy Sanchez", 
              album: "Elevated", 
              duration:"3:57", 
              path: 'https://ia601405.us.archive.org/33/items/leroysanchezpreacherofficialmusicvideo/Leroy%20Sanchez%20-%20Preacher%20%28Official%20Music%20Video%29.mp3'
            }
        ],
    },

    mutations: {
      playlistId (state,payload) {
        state.playlistId = payload;
      },
      songlist(state, payload) {
          state.songlist = payload;
      },
      playlistChangeSong (state, payload) {
      
          if (payload != undefined) {
                  state.currentSongIndex = payload;
                  this.state.selectedSong = state.songlist[payload];
                  this.state.AudioSrc = state.songlist[state.currentSongIndex].path;

              if (this.state.AudiSrc != '') {
                  this.state.Audio.src = this.state.AudioSrc;
                  this.state.Audio.crossOrigin = "anonymous";

              } else {
                  console.error({response: 'error', message:'path doesnt exist'});
                  return;
              }
              
          } else {
              console.error({response:'error', message:'undefined index'});
              return;
          }
      },
      getcurrentDuration(state) {
          var localThis = this;
              localThis.state.trackTimeLoop = setInterval(function(){
              localThis.state.currentDuration = Math.floor(localThis.state.Audio.currentTime);
              localThis.state.currentProgressBar = (localThis.state.Audio.currentTime / localThis.state.songDuration * 100);
          }, 1000);
    
      },
      play (state) {
          //     this.isActivePlayer = true;
          if (this.state.songDuration > 0) {
              if (this.state.Audio.play() !== undefined) {
                  this.state.Audio.play().then(function() {
                  // Auto pause Audio here..
                  }).catch(function(error) {
                      console.error(error);
                      return;
                  });
              }

          }
      },
      reset(state) {
        this.state.Audio.currentTime = 0;
        this.state.currentProgressBar = 0;
          clearInterval(this.state.trackTimeLoop)
      },
      pause (state) {
          if (this.state.Audio.currentTime > 0 && !this.state.Audio.ended && this.state.songDuration > 0) { 
      
              if (this.state.Audio.pause() !== undefined) {
                  this.state.Audio.pause().then(function() {
                  // Auto pause Audio here..
                }).catch(function(error) {
                    console.error(error);
                    return;
                });
        
              }
          }
      },
      forward(state) {
          if ((state.currentSongIndex += 1) < state.songlist.length) { state.currentSongIndex + 1; }
      },
      backward(state) {
          if ((state.currentSongIndex -= 1) >= 0) { state.currentSongIndex - 1 };
      },
      stop(state) {
          this.state.isPlaying = false;
          this.state.Audio.currentTime = 0;
          this.state.currentDuration = 0;
          state.currentSongIndex = '';
          this.state.currentProgressBar = 0;
          this.state.songDuration = '';
          clearInterval(state.trackTimeLoop)
      },

      isPlaying(state, payload) {
        this.state.isPlaying = payload;
      },
      trackProgressBar (state, payload) {
        console.log(payload);
      }

    },

    actions: {
      asyncTrackProgressBar ({commit}, payload) {
        commit("trackProgressBar", payload);
      },

      asyncPlaylistId ({commit},payload) {
        commit('playlistId', payload);
      },
      asyncSonglist({commit}, payload) {
        commit('songlist', payload);
      },
      ayncPlaylistChangeSong({commit, state, rootState}, payload) {

          commit('playlistChangeSong', payload);

          rootState.Audio.addEventListener("loadedmetadata", function() {
              rootState.songDuration = Math.round(rootState.Audio.duration);
              commit('play');
              commit('getcurrentDuration');
              commit('isPlaying', true);
          });

          rootState.Audio.addEventListener('ended', function () {
              if (rootState.Audio.ended) {
                  console.log("Ended");
                  if ((state.currentSongIndex += 1) < state.songlist.length) {
                    console.log("in here");
                    commit('playlistChangeSong', state.currentSongIndex);
                  } else {
                    commit('stop');
                  }
              }
          });
      },
      asyncPlaylistPlay({commit}) {
          commit('play');
          commit('isPlaying', true);
      },
      asyncPlaylistPause({commit}) {
          commit('pause');
          commit('isPlaying', false);
      },
      asyncPlaylistForward({commit, state}) {
          commit('forward');
          commit('playlistChangeSong', state.currentSongIndex);
      },
      asyncPlaylistBackward({commit, state}) {
          commit('backward');
          commit('playlistChangeSong', state.currentSongIndex);
      },
      asyncPlaylistStop({commit}) {
          commit('pause');
          commit('stop');
      },
      asyncPlaylistReset({commit}) {
          commit('reset');
      },
    }
}