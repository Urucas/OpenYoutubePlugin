OpenYouTubePlugin
=============
OpenYouTubePlugin is a phonegap extension of the openyoutubeactivity 
created by Keyes Labs, you can check the source code in https://code.google.com/p/android-youtube-player/

Available for Android & Cordova >= 3.0

Now fits the fullscreen!

Installation
============

Via cordova command-line: 

```cordova plugin add https://github.com/Urucas/OpenYoutubePlugin.git```

Usage
=====


```
var vid = window.openyt.parseID(url);
// parse youtube url id, possible urls formats are:
// * http://www.youtube.com/watch?v=QtNJ_OOOJQQ
// * http://youtu.be/QtNJ_OOOJQQ

if(vid != null) {
  // shows youtube activity with yt video id passed as param
  window.openyt.open(vid);
}
```

License
=======
The source Code is available under same licenses as openyoutubeactivity which is :
Apache License 2.0
