const validJSON = '{"name": "Mango", "age": 3}';
const invalidJSON = '{бекенд вернул вот такое чудо}';

try {
  console.log(1);
  console.log(JSON.parse(invalidJSON));
  console.log(2); // не увидим в консоли если ошибка
} catch (error) {
  if (error.name === 'SyntaxError') {
    console.log('ошибка парса json; надо что-то делать');
  }
}
console.log('после try...catch');
