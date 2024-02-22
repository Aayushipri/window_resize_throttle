console.log("debounce project");
const inputValueElement = document.getElementById("inputValue");

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const onChangeCallBack = (event) => {
  console.log("value", event.target.value);
};

const debouncedSearchHandler = debounce(onChangeCallBack, 1000);

inputValueElement.addEventListener("input", debouncedSearchHandler);
