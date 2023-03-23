console.log(__filename);
console.log(__dirname);

console.log('----------------');

const path = require('path');
console.log(path.resolve(__dirname));

console.log('----------------');

console.log(path.resolve(__dirname, '..', '..'));

console.log('----------------');

console.log(path.resolve(__dirname, '..','..','arquivos', 'img'));