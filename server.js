var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Complete hackerrank challenge',
	completed: false
},
{
	id: 2,
	description: 'Watch something',
	completed: false
},
{
	id: 3,
	description: 'Debug code',
	completed: true
}];

app.get('/',function (req, res) {
	res.send('Todo API Root!');
});

//GET /todos
app.get('/todos',function (req, res) {
	res.json(todos);
});

//Get /todos/:id
app.get('/todos/:id',function (req, res) {
	var todoid = parseInt(req.params.id,10);
	var matched;
	for(var i =0; i<todos.length; i++)
	{
		if(todoid === todos[i].id)
			matched = todos[i];
	}
	if(typeof matched === 'undefined')
		return res.status(404).send();
	else
		res.json(matched);	
});

app.listen(PORT, function()
	{
		console.log('Express started at: '+PORT);
	});