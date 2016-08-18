// #!/usr/bin/env node
var spawn =require('child_process').spawn;
setTimeout(
    function () {
        spawn('open',['http://localhost:3001'])
    },3000);