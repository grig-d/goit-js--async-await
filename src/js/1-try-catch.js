try {
  console.log('внутри try до myVar');
  myVar; // создаёт ошибку
  console.log('внутри try после myVar');
} catch (error) {
  console.log('ошибка');
  console.dir(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
console.log('после try...catch');
