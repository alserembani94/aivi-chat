const fs = require('fs');
const rimraf = require("rimraf").sync;
const execSync = require('child_process').execSync;

function exec(cmd, io) {
	console.log(`Executing: ${cmd}`);
	return execSync(cmd, io);
}

// const f = fs.readFileSync('./src/utils/configs.ts','utf8');
// const m = f.match(/^\s*BASE_URL[\s:'"]+([^"]+)/m);
// if (m) {
	// const url = m[1];
	// if (url === 'https://backend.lms.qijang.com/') {

		rimraf('build'); // delete build directory

		exec('react-scripts build',{ stdio: 'inherit' });
		exec('aws s3 sync ./build s3://aivi.qijang.com --acl public-read',{ stdio: 'inherit' });
// 	}
// 	else {
// 		console.error('ERROR: config.ts is not connected to live!');
// 	}
// }
