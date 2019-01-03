//blockchain.js 모듈을 이곳에서 가져다 쓰겠다.
 Blockchain = require('./BlockChain');

//위에서 가져온 모듈의 객체를 만든다.
const bitcoin = new Blockchain();

bitcoin.createNewBlock('1111111111','aa111111111','1111111111aa1a1');
bitcoin.createNewBlock('111111111111','aaa111111111','1111111111aa1a1aa');
bitcoin.createNewBlock('11111111111111','aaaaa111111111','1111111111aa1aaa1');
//찍어보기
console.log(bitcoin);
