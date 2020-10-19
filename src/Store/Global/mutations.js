export default {
        songlist (state, payload) {
          state.songlist = payload
        },
        albumSongslist(state, payload) {
            state.albumSongslist = payload;
        },
        changeSong (state, payload) {
            if (payload != undefined) {

                    state.currentSongIndex = payload;
                    state.selectedSong = state.songlist[payload];
                    state.AudioSrc = state.songlist[state.currentSongIndex].path;

                if (state.AudiSrc != '') {
                    state.Audio.src = state.AudioSrc;
                    state.Audio.crossOrigin = "anonymous";

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
            state.trackTimeLoop = setInterval(function(){
                state.currentDuration = Math.floor(state.Audio.currentTime);
                state.currentProgressBar = (state.Audio.currentTime / state.songDuration * 100);
            }, 1000);
      
        },
        play (state) {

            //     this.isActivePlayer = true;
            if (state.songDuration > 0) {
                if (state.Audio.play() !== undefined) {
                    state.Audio.play().then(function() {
                    // Auto pause Audio here..
                    }).catch(function(error) {
                        console.error(error);
                        return;
                    });
                }

            }
        },
        reset(state) {
            state.Audio.currentTime = 0;
            state.currentProgressBar = 0;
            clearInterval(state.trackTimeLoop)
        },
        pause (state) {
            if (state.Audio.currentTime > 0 && !state.Audio.ended && state.songDuration > 0) { 
        
                if (state.Audio.pause() !== undefined) {
                    state.Audio.pause().then(function() {
                    // Auto pause Audio here..
                  }).catch(function(error) {
                      console.error(error);
                      return;
                  });
          
                }
            }
        },
        forward(state) {
            if ((state.currentSongIndex + 1) < state.songlist.length) { state.currentSongIndex += 1; }
        },
        backward(state) {
            if ((state.currentSongIndex - 1) >= 0) { state.currentSongIndex -= 1 };
        },
        stop(state) {
            state.isPlaying = false;
            state.Audio.currentTime = 0;
            state.currentDuration = 0;
            state.currentSongIndex = '';
            state.currentProgressBar = 0;
            state.songDuration = '';
            clearInterval(state.trackTimeLoop)
        },

        isPlaying(state, payload) {
            state.isPlaying = payload;
        },

        selectAlbum(state, payload) {
            state.selectedAlbum = payload;
        }
}