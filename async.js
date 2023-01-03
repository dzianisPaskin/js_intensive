const createDebounceFunction = (callback, delay) => {
  let debounceTimer;

  return function() {
    const context = this
    const args = arguments
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
    console.log(args)
  };
};

const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 1000);
debounceLog100();
setTimeout(debounceLog100, 200);
setTimeout(debounceLog100, 400);
