#!/usr/bin/env node

const http=require("http");

function sleep(millis) {
	return new Promise((resolve, reject)=>{
		setTimeout(resolve,millis);
	});
}

process.on("SIGTERM",async ()=>{
	console.log("before exit");

	for (let i=0; i<10; i++) {
		console.log("sleeping: "+i);
		await sleep(1000);
	}

	console.log("Clean exit!");

	process.exit();
});

let server=http.createServer((req,res)=>{
	res.end("hello world");
});

server.listen(process.env.PORT);
console.log("Listening to port: "+process.env.PORT);
