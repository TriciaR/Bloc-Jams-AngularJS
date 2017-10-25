(function () {
    function SongPlayer() {
        var SongPlayer = {};
             /**
             * @desc creates currentSong variable
             * @type {Object}
             */
            var currentSong = null;
             /**
             * @desc Buzz object audio file
             * @type {Object}
             */
            var currentBuzzObject = null;
             /**
             * @function playSong
             * @desc plays currenty selected song audio file
             */
            var playSong = function () {
                currentBuzzObject.play();
                song.playing = true;
            };

             /**             * @function setSong             * @desc Stops currently playing song and loads new audio file as currentBuzzObject             * @param {Object} song             */
            var setSong = function (song) {
                if (currentBuzzObject) {
                    currentBuzzObject.stop();
                    currentSong.playing = null;
                }
                currentBuzzObject = new buzz.sound(song.audioUrl, {
                    formats: ['mp3'],
                    preload: true
                })

                currentSong = song;
            };
             /**             * @function SongPlayer.play             * @desc plays currently selected song and loads selected audio file as currentBuzzObject if not currentSong             * @param {Object} song             */
            SongPlayer.play = function (song) {
                if (currentSong !== song) {
                    setSong(song);
                    playSong();

                } else if (currentSong === song) {
                    if (currentBuzzObject.isPaused()) {
                        playSong();
                    }
                }
            };
             /**             * @function SongPlayer.pause             * @desc Pauses currently playing             * @param {Object} song             */
            SongPlayer.pause = function (song) {
                currentBuzzObject.pause();
                song.playing = false;
            };


        return SongPlayer;
    };

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer)
})();