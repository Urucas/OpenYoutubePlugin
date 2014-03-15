
try{
    var openyt = {
        /* Params
		 * @ytid: String (youtube video id) 
		 * @success: Function
		 * @error: Function
		 */
        open: function(ytid, success, error){
			if(ytid == undefined) {
				console.log("toast called without message");
				return;
			}
			if(success == undefined && !success instanceof Function) {
				success = null;
			}
			if(error == undefined && !error instanceof Function) {
				error = null;
			}
            cordova.exec( success, error, "OpenYouTubePlugin", "open", [ytid] );
        },
		/*
		 * Params
		 * @url: String (valud youtube url)
		 */
		parseID: function(uri) {
		
			var vars = {};
	    	var parts = uri.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
//				console.log(key);
//				console.log(value);
		        vars[key] = value;
			});
			return vars["v"];
		}
    }
    module.exports = openyt;

}catch(e){
	console.log("openyt plugin error --> "+e.message);
}
