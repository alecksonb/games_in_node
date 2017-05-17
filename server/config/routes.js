module.exports = function(app){
	app.get('/', function(request, response){
		console.log('on the name page');
		response.render('player')
	});
	app.post('/player', function(request, response){
		console.log('we made it here');
		//response.send(request.body);
		response.render('pacman', {name: request.body.name})
	});	
}