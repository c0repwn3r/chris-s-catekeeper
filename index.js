const https = require('https');

const machineId = require('node-machine-id');

const base64 = require('base-64');

const { spawn } = require('child_process');

let id = machineId.machineIdSync();

console.log(id);

const options = {
	hostname: 'tylerdonia.ml',
	port: 443,
	path: `/api/check-authorization20.php?secret=kmfjd3298ut&&hash=${id}`,
	method: 'GET'
};

id = undefined;

const req = https.request(options, (res) => {
	console.log(`statusCode: ${res.statusCode}`);

	res.on('data', d => {
		var response = `${d}`;
		console.log(response);
		var parts = base64.decode(response).split(':');
		if(Number(parts[0])-new Date().getTime() < 5000){
			const cmd = spawn(`node`, ['start.min.js', response]);
			cmd.stderr.on('data', (data) => {
				console.error(`stderr: ${data}`);
			});
			cmd.stdout.on('data', (data) => {
				console.log(`${data}`);
			});
		}
	});
});

req.on('error', error => {
	console.error(error);
});

req.end()
