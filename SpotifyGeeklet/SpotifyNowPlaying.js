#!/usr/bin/env osascript -l JavaScript

var SpotifyLibrary = {};

SpotifyLibrary.displayTime = function (position, duration) {
    return SpotifyLibrary.timeFormat(position) + "/" + SpotifyLibrary.timeFormat(duration);
};

SpotifyLibrary.timeFormat = function (time_int) {
    /*
    Convert an integer number of seconds to a pretty formatted time.

    We handle an inconsistency in the Spotify framework here too. It says it returns seconds, but I get millis instead.

    This will break if the song length is actually greater than 16 minutes 40 seconds (1000 seconds) *and* Spotify fixes
    their app.
     */

    if (time_int > 1000) {
        time_int = time_int / 1000;
    }

    var minutes = Math.floor(time_int / 60);
    var seconds = Math.floor(time_int % 60);
    seconds = ('00' + (seconds % 60)).slice(-2);

    return minutes + ":" + seconds;
};

SpotifyLibrary.setDefaultArtwork = function () {
    return "";
};

SpotifyLibrary.run = function (argv) {
    var Spotify = Application("Spotify");

    if (!Spotify.running()) {
        return SpotifyLibrary.setDefaultArtwork();
    }

    var action = argv[0];

    var data = {};

    data.spotifyVersion = Spotify.version();

    var track = Spotify.currentTrack();

    if (Spotify.playerState() === "stopped") {
        if (action === "artwork") {
            return SpotifyLibrary.setDefaultArtwork();
        }
    }

    data.name = track.name();
    data.artist = track.artist();
    data.album = track.album();
    data.artwork = track.artworkUrl();
    data.time = SpotifyLibrary.displayTime(Spotify.playerPosition(), track.duration());

    if (action in data) {
        return data[action];
    } else {
        return JSON.stringify(data, null, '\t');
    }
}
;

function run(argv) {
    return SpotifyLibrary.run(argv);
}
