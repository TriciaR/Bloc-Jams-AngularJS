(function () {
    /**
    * @function SongPlayer
    * @description allows controlling the songs & audio files from Fixtures through Player Bar
    * @param {Object} Fixtures
    */
    function SongPlayer(Fixtures) {
        var SongPlayer = {};
        /**
        * @desc sets active album
        */
        var currentAlbum = Fixtures.getAlbum();

        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;


        /**        * @function setSong        * @desc Stops currently playing song and loads new audio file as currentBuzzObject        * @param {Object} song        */
        var setSong = function (song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            })

            SongPlayer.currentSong = song;
        };

        /**
        * @func getSongIndex
        * @desc finds the index of the selected song
        * @param {object} song
        * @return {number}
        */
        var getSongIndex = function (song) {
            return currentAlbum.songs.indexOf(song);
        };

        /**
        * @desc creates public attr SongPlayer.currentSong  set active song from list of songs
        * @type {Object}

        */
        /**
        * @desc clears current song
        */
        SongPlayer.currentSong = null;


        var playSong = function () {
            currentBuzzObject.play();
            song.playing = true;
        };
        /**
        * @desc creates public attr SongPlayer.currentSong  set active song from list of songs
        * @type {Object}
        */
        var stopSong = function () {
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
        };


        /**        * @function SongPlayer.play        * @desc plays currently selected song and loads selected audio file as currentBuzzObject if not currentSong        * @param {Object} song        */
        SongPlayer.play = function (song) {

            /**
            * @function playSong
            * @desc plays currenty selected song audio file
            */
            var playSong = function () {
                currentBuzzObject.play();
                song.playing = true;
            };

            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
                setSong(song);
                playSong();

            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong();
                }
            }
        };

        /**        * @function SongPlayer.pause        * @desc Pauses currently playing        * @param {Object} song        */

        SongPlayer.pause = function (song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };

        /**
        * @func go to previous song, set song index
        */
        SongPlayer.previous = function () {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;

            if (currentSongIndex < 0) {
                stopSong();
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };

        /**
        * @func SongPlayer.next
        * @desc stop current song, advance & play next indexed song in current album
        */
        SongPlayer.next = function () {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            if (currentSongIndex >= currentAlbum.songs.length) {
                stopSong();

            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        return SongPlayer;
    };

    angular
        .module('blocJams')
        .factory('SongPlayer', ['Fixtures', SongPlayer])
})();