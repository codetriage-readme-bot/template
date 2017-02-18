module.exports = {
	dynamic: {
		files: [{
			expand: true,
			cwd: 'template/img/',
			src: ['**/*.{png,jpg,gif}'],
			dest: 'assets/img/' 
		}]
	}
}