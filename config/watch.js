module.exports = {
	watch: {
	    files: ['template/*.html', 'template/**/*/*.*'],
	    tasks: ['sass:dist', 'concat:dist', 'processhtml:dev'],
	},
};