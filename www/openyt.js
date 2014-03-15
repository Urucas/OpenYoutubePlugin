try{
    var openyt = {
        /*
		 *
		 * @ytid: String 
		 * @success: Function
		 * @error: Function
		 *
		 */
        open: function(ytid, duration, success, error){
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
        }
    }
    module.exports = openyt;

}catch(e){
	console.log("toast->"+e.message)
}
