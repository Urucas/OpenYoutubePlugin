OpenYouTubePlugin
=============
OpenYouTubePlugin is a phonegap extension of the openyoutubeactivity 
created by Keyes Labs, you can check the source code in https://code.google.com/p/android-youtube-player/


Installation
============

* Add to Build Path the **openyoutubeactivity.jar** from /libs folder

* Add the plugin markup to the **config.xml** file of the phonegap project 
``<plugin name="OpenYouTubePlugin" value="com.urucas.plugins.OpenYouTubePlugin"/>``

* Add the activity to your manifest
``<activity android:name="com.keyes.youtube.OpenYouTubePlayerActivity" android:screenOrientation="landscape"></activity>``

Usage
=====

<code>
cordova.exec(
  function(a){ /* success callback */ }, 
  function(err) { /* error callback */ }, 
  "OpenYouTubePlugin", 
  "open",
  ["vid"]
);
</code>
