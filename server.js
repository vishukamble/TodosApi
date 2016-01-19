var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1; 

app.use(bodyParser.json());

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

//POST /todos
app.post('/todos', function(req,res)
{
	var body = req.body;
	body.id = todoNextId;
	++todoNextId
	todos.push(body);

	//console.log('description: '+body.description );
	res.json(body);


});

app.listen(PORT, function()
	{
		console.log('Express started at: '+PORT);
	});