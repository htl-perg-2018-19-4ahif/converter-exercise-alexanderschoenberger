const convert = require('convert-units')
try {
    let args = process.argv.slice(2);
    let number = convert(args[0]).from(args[1]).to(args[3]);
    if (args[2] != 'to' || isNaN(number)) throw err;
    else console.log(args[0] + ' ' + args[1] + ' are ' + number + ' ' + args[3]);
} catch (err) {
    console.log('Invalid parameters');
}