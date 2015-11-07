function ScoreRegister() {
	
}

ScoreRegister.put = function(level, score) {
	localStorage.setItem('kultlinge-' + level, score);
};

ScoreRegister.get = function(level) {
	return localStorage.getItem('kultlinge-' + level);
};