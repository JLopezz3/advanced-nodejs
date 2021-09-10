
// helps turn callback functions into promises
var { promisify } = require('util');

var delay = (seconds, callback) => {
    if (seconds > 3){
        callback(new Error(`${seconds} seconds is too long!`));
    } else {
        setTimeout(() => 
            callback(null, `the ${seconds} second delay is over.`),
            seconds
        );
    }
}

var promiseDelay = promisify(delay);

promiseDelay(5)
    .then(console.log)
    .catch((error) => console.log(`error: ${error.message}`));