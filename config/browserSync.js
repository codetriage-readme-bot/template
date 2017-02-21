module.exports = {
    dev:{
    	bsFiles: {
        	src : [
				'assets/*.*',
				'./*.html'
        	]
   		},
    	options: {
    		watchTask: true,
	        server: {
	            baseDir: "./"
	        }
    	}
    }
};