//REQUIRE STUFF
const express = require('express');
const path = require('path');


//RUN EXPRESS
const app = express();


//EXPRESS ROUTING
app.get('/',function(req,res){
	var HTMLPath = path.join(__dirname, "/Home/index.html");
	res.sendFile(HTMLPath);
})

app.get('/about',function(req,res){
	//Query
	//www.google.com?name=Chris&lastname=Kang
	// console.log(req.query.name)

	var aboutpage = path.join(__dirname,"/about/about.html");
	res.sendFile(aboutpage);
})

app.get('/product/:id',function(req,res){
	//Parameter
	//www.google.com/product/34
	// console.log(req.params.id)
	
	res.send("Product Page");
})

app.get('/user', (req, res) => {
	const MYPROFILE = {
		"name": "Juhee",
		"lastname": "Han",
		"age" : 24
	}
	res.send(MYPROFILE);
})


const port = 8000;
app.listen(port)
console.log(`App is running at port : ${port}`);




// JAVASCRIPT

// const javascriptobj = {
// 	keyname : 1,
// 	name: "Chris",
// 	lastname:"Kang",
// 	hobby : [ "soccer", "basketball", "drawing", ],
// }

// JSON

// const json = {
// 	"keyname": 1,
// 	"name": "Chris",
// 	"lastname" :"Kang",
// 	"hobby": [ "soccer", "basketball", "drawing" ]
// }