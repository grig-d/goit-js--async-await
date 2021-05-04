async function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝',
    apple: '🍎',
  };
  //   return Promise.resolve(fruits[name]);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fruits[name]);
    }, 500);
  });
}

// надо гарантированно получить последовательное выполнение - сначала яблоко, затем киви
// такой код превращается в ёлку - promise hell
function makeSmoothie() {
  getFruit('apple').then(fruit => {
    console.log(fruit);
    getFruit('kiwi').then(fruit => console.log(fruit));
  });
}
// makeSmoothie();

// перепишем код используя async/await:
// это последовательный код
async function asyncMakeSmoothie() {
  console.time('asyncMakeSmoothie');
  // подожди пока выполнится промис и только после этого запиши результат пормиса в переменную
  const apple = await getFruit('apple'); // на этой строке функция приостанавливается и ждет выполнения промиса, в это время выполнение кода не зависает
  console.log(apple);
  const kiwi = await getFruit('kiwi');
  console.log(kiwi);
  console.timeEnd('asyncMakeSmoothie');
}
// asyncMakeSmoothie();

// "параллельный" код, все промисы выполняются параллельно
async function parallelMakeSmoothie() {
  try {
    console.time('parallelMakeSmoothie');
    const apple = getFruit('apple');
    const kiwi = getFruit('kiwi');
    const strawberry = getFruit('strawberry');
    const fruits = await Promise.all([apple, kiwi, strawberry]);
    console.log(fruits);
    console.timeEnd('parallelMakeSmoothie');
  } catch (error) {console.log(error);}
}
parallelMakeSmoothie();
