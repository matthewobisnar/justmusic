export default { 
    state: {
        albumId: '',
        albumSongList: [],
        selectedAlbum: '',
        isPlaying: false,
        currentSongIndex: '',
        albums: [
            { 
              id:201909,
              image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
              artist: "Edsheeran",
              album: "X Album",
              description: 'lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
              release: '08/04/2018',
              songs: [
                { 
                  id:1,
                  image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
                  title:"I Don't Care", 
                  artist: "Ed Sheeran ft. Justin Bieber", 
                  album: "Ed Sheeran", 
                  duration:"3:43", 
                  path: 'https://archive.org/download/edsheeranperfectofficialmusicvideo_201909/Ed%20Sheeran%20%26%20Justin%20Bieber%20-%20I%20Don%27t%20Care%20%5BOfficial%20Video%5D.mp3'
                },
                { 
                  id:2,
                  image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
                  title:"Antisocial", 
                  artist: "Ed Sheeran", 
                  album: "X Album", 
                  duration:"3:28", 
                  path: 'https://archive.org/download/edsheeranperfectofficialmusicvideo_201909/Ed%20Sheeran%20%26%20Travis%20Scott%20-%20Antisocial%20%5BOfficial%20Video%5D.mp3'
                },
                { 
                  id:3,
                  image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
                  title:"Cross Me", 
                  artist: "Ed Sheeran feat. Chance The Rapper & PnB Rock", 
                  album: "X Album", 
                  duration:"3:26", 
                  path: 'https://archive.org/download/edsheeranperfectofficialmusicvideo_201909/Ed%20Sheeran%20-%20Cross%20Me%20%28feat.%20Chance%20The%20Rapper%20%26amp%20PnB%20Rock%29%20%5BOfficial%20Lyric%20Video%5D.mp3'
                },
                { 
                  id:4,
                  image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
                  title:"Nothing On You ", 
                  artist: "Ed Sheeran (feat. Paulo Londra & Dave)", 
                  album: "X Album", 
                  duration:"3:32", 
                  path: 'https://archive.org/download/edsheeranperfectofficialmusicvideo_201909/Ed%20Sheeran%20-%20Nothing%20On%20You%20%28feat.%20Paulo%20Londra%20%26%20Dave%29%20%5BSBTV%5D.mp3'
                },
                { 
                  id:5,
                  image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
                  title:"Perfect", 
                  artist: "Ed Sheeran", 
                  album: "X Album", 
                  duration:"4:40", 
                  path: 'https://archive.org/download/edsheeranperfectofficialmusicvideo_201909/Ed%20Sheeran%20-%20Perfect%20%28Official%20Music%20Video%29.mp3'
                },
                { 
                  id:6,
                  image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
                  title:"Shape Of You", 
                  artist: "Ed Sheeran", 
                  album: "X Album", 
                  duration:"4:23", 
                  path: 'https://archive.org/download/edsheeranperfectofficialmusicvideo_201909/Ed%20Sheeran%20-%20Shape%20of%20You%20%5BOfficial%20Video%5D.mp3'
                },
                { 
                  id:7,
                  image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
                  title:"South of the Border", 
                  artist: "Ed Sheeran (feat. Camila Cabello & Cardi B)", 
                  album: "X Album", 
                  duration:"3:24", 
                  path: 'https://archive.org/download/edsheeranperfectofficialmusicvideo_201909/Ed%20Sheeran%20-%20South%20of%20the%20Border%20%28feat.%20Camila%20Cabello%20%26%20Cardi%20B%29%20%5BOfficial%20Lyric%20Video%5D.mp3'
                },
                { 
                  id:8,
                  image: "https://i.scdn.co/image/f55cab0739390cf3b2c2f773b9c779b2f0ae8a99", 
                  title:"Take Me Back To London", 
                  artist: "Ed Sheeran", 
                  album: "X Album", 
                  duration:"5:52", 
                  path: 'https://archive.org/download/edsheeranperfectofficialmusicvideo_201909/Ed%20Sheeran%20-%20Take%20Me%20Back%20To%20London%20%28Sir%20Spyro%20Remix%29%20%5Bfeat.%20Stormzy%2C%20Jaykae%20%26%20Aitch%5D.mp3'
                },
              ]
            },
            { 
              id:2029010,
              image: "http://www.fouroverfour.jukely.com/wp-content/uploads/2017/01/Leroy-Sanchez.jpg", 
              artist: "Leroy Sanchez",
              album: "Elevated",
              description: 'lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
              release: '08/04/2017',
              songs: [
                { 
                  id:1,
                  image: "https://i1.sndcdn.com/avatars-000520361715-4dr7nr-t500x500.jpg", 
                  title:"How Not To Love You", 
                  artist: "Leroy Sanchez", 
                  album: "Elevated", 
                  duration:"3:17", 
                  path: 'https://archive.org/download/leroysanchezletyougoepelevatedavailableonspotifyanditunes/LEROY%20SANCHEZ%20-%20How%20Not%20To%20Love%20You%20%28EP%20Elevated%20available%20on%20Spotify%20and%20iTunes%29.mp3'
                },
                { 
                  id:2,
                  image: "https://i1.sndcdn.com/avatars-000520361715-4dr7nr-t500x500.jpg", 
                  title:"Let You Go", 
                  artist: "Leroy Sanchez", 
                  album: "Elevated", 
                  duration:"3:58", 
                  path: 'https://ia801409.us.archive.org/29/items/leroysanchezletyougoepelevatedavailableonspotifyanditunes/LEROY%20SANCHEZ%20-%20Let%20You%20Go%20%28EP%20Elevated%20available%20on%20Spotify%20and%20iTunes%29.mp3'
                },
                { 
                  id:2,
                  image: "https://i1.sndcdn.com/avatars-000520361715-4dr7nr-t500x500.jpg", 
                  title:"Man of the Year", 
                  artist: "Leroy Sanchez", 
                  album: "Elevated", 
                  duration:"3:30", 
                  path: 'https://archive.org/download/leroysanchezletyougoepelevatedavailableonspotifyanditunes/Leroy%20Sanchez%20-%20Man%20of%20the%20Year%20%28Lyric%20Video%29.mp3'
                },
                { 
                  id:2,
                  image: "https://i1.sndcdn.com/avatars-000520361715-4dr7nr-t500x500.jpg", 
                  title:"Preacher", 
                  artist: "Leroy Sanchez", 
                  album: "Elevated", 
                  duration:"3:57", 
                  path: 'https://ia601405.us.archive.org/33/items/leroysanchezpreacherofficialmusicvideo/Leroy%20Sanchez%20-%20Preacher%20%28Official%20Music%20Video%29.mp3'
                },
              ]
            },
            { 
              id:2025043,
              image: "https://static.lafeltrinelli.it/static/images-3/xxl/309/7914309.jpg", 
              artist: "Shawn Mendes",
              album: "Illuminate",
              description: 'lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
              release: '08/04/2017',
              songs: [
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
              ]
            }
        ],
    },

    mutations: {
      albumId (state,payload) {
        state.albumId = payload;
      },
      albumSongslist(state, payload) {
          state.albumSongList = payload;
      },
      changeSong (state, payload) {
          if (payload != undefined) {
                  state.currentSongIndex = payload;
                  state.albumId = state.selectedAlbum.id;
                  
                  this.state.selectedSong = state.albumSongList[payload];
                  this.state.AudioSrc = state.albumSongList[state.currentSongIndex].path;

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
          if ((state.currentSongIndex += 1) < state.albumSongList.length) { state.currentSongIndex + 1; }
      },
      backward(state) {
          if ((state.currentSongIndex -= 1) >= 0) { state.currentSongIndexs - 1};
      },
      stop(state) {
          this.state.isPlaying = false;
          this.state.Audio.currentTime = 0;
          this.state.currentDuration = 0;
          state.currentSongIndex = '';
          this.state.currentProgressBar = 0;
          this.state.songDuration = '';
          // state.albumId = ''
          clearInterval(state.trackTimeLoop)
      },

      isPlaying(state, payload) {
        this.state.isPlaying = payload;
      },

      selectAlbum(state, payload) {
        state.selectedAlbum = payload;
      }
    },

    actions: {
      AsyncAlbumId ({commit}, payload) {
        commit('albumId', payload);
      },
      asyncSelectAlbum({commit}, payload) {
        commit('selectAlbum', payload);
      },
      asyncaAlbumSongsList({commit, rootState}, payload) {
        commit('albumSongslist', payload);
      },
      ayncChangeSong({commit, state, rootState}, payload) {

          commit('changeSong', payload);

          rootState.Audio.addEventListener("loadedmetadata", function() {
              rootState.songDuration = Math.round(rootState.Audio.duration);
              commit('play');
              commit('getcurrentDuration');
              commit('isPlaying', true);
          });

          rootState.Audio.addEventListener('ended', function () {
              if (rootState.Audio.ended) {
                  console.log("Ended");
                  if ((state.currentSongIndex += 1) < state.albumSongList.length) {
                    commit('changeSong', state.currentSongIndex);
                  } else {
                    commit('stop');
                  }
              }
          });
      },
      asyncPlay({commit}) {
          commit('play');
          commit('isPlaying', true);
      },
      asyncPause({commit}) {
          commit('pause');
          commit('isPlaying', false);
      },
      asyncForward({commit, state}) {
          commit('forward');
          commit('changeSong', state.currentSongIndex);
      },
      asyncBackward({commit, state}) {
          commit('backward');
          commit('changeSong', state.currentSongIndex);
      },
      asyncStop({commit}) {
          commit('pause');
          commit('stop');
      },
      asyncReset({commit}) {
          commit('reset');
      },
    }
}