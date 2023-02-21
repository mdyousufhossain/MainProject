// debounce function
export function debounce(func, delay) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

// Throttle function
export function throttle(func, delay) {
  let wait = false;

  return (...args) => {
    if (wait) {
      return;
    }

    func(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
}

// once function

export function once(func) {
  let ran = false;
  let result;
  return function() {
    if (ran) return result;
    result = func.apply(this, arguments);
    ran = true;
    return result;
  };
}
