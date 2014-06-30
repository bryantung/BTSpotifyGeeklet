BTSpotifyGeeklet
================

Geeklet for Spotify player, shows track info and artwork

Instructions
------------
###**Easy setup**<br/>
<ol>
<li>download the zip file from <a href="https://github.com/bryantung/BTSpotifyGeeklet/releases">releases</a> tab
<li>decompress the downloaded glet.zip
<li>open the SpotifyGeeklet/glet folder
<li>open each file in GeekTool
<li><i>you can rearrange the geeklets to your desired position</i>
</ol>

###**Using the codes**<br/>
In Shell Geeklet, type in command:<br/>
**Without arguments**
```
osascript path_to_script
```
Result
```
TrackName
TrackArtist
TrackAlbum
TrackTime
```
Running without argument will also update the Artwork.tiff file

**With arguments**
```
osascript path_to_script -name     // return track name
osascript path_to_script -artist   // return track artist
osascript path_to_script -album    // return track album
osascript path_to_script -time     // return track time/duration
osascript path_to_script -artwork  // update Artwork.tiff
```

In Image Geeklet, set the path to ```path_to_script_folder/Artwork.tiff```

Refresh geeklets with duration of 1-5 secs, depending on your preference

Extras
------
If you don't want the Spotify icon as the default artwork, there's another transparent icon in ```path_to_script_folder/DefaultArtwork/DefaultArtworkTrans.tiff```, rename it to ```DefaultArtwork.tiff```.
If you prefer another icon image, you can just replace the ```DefaultArtwork.tiff```.

Screenshot
----------
<img src="https://github.com/bryantung/BTSpotifyGeeklet/raw/master/Screenshot%20Playing.png" width=500></img>

Credit
------
```
AppleScript to show current song and artwork in Geektool
By Luc-Olivier Dumais-Blais
31-08-2012
*version 0.5.1*
```

Modified from https://github.com/Lucconouche/SpotifyNowPlaying
