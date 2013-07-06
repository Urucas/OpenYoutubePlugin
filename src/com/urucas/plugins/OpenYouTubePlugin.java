package com.urucas.plugins;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import android.content.Intent;
import android.net.Uri;
import android.util.Log;

import com.keyes.youtube.OpenYouTubePlayerActivity;

public class OpenYouTubePlugin extends CordovaPlugin {

	@Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		
		if(action.equals("open")) {
			String url = args.getString(0);
        	this.open(url, callbackContext);
        	return true;
        }        
		
		return false;
	}
	
	private void open(String vid, CallbackContext callbackContext) {
			
		Intent intent = new Intent(null, Uri.parse("ytv://"+vid), this.cordova.getActivity(), OpenYouTubePlayerActivity.class);
		this.cordova.getActivity().startActivity(intent);
	}
	
}
