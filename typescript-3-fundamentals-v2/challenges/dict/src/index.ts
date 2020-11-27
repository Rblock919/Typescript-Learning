export type Dict<T> = {
  [k: string]: T | undefined;
};

// Array.prototype.map, but for Dict
export function mapDict<T, S>(
  dict: Dict<T>,
  fn: (arg: T, idx: number) => S
): Dict<S> {
  const out: Dict<S> = {};

  Object.keys(dict).forEach((dKey, idx) => {
    const thisItem = dict[dKey];
    if (typeof thisItem !== "undefined") {
      out[dKey] = fn(thisItem, idx);
    }
  });

  return out;
}

const poo = mapDict({ a: "a", b: "b" }, (str) => ({ val: str }));
poo;

// Array.prototype.reduce, but for Dict
export function reduceDict<T, R>(
  d: Dict<T>,
  reducer: (acc: R, item: T, idx: string) => R,
  initialValue: R
): R {
  // start with 0
  let currentSum: R = initialValue;
  Object.keys(d).forEach((key) => {
    // iterate
    const val = d[key]; // get current value of item
    if (typeof val !== "undefined") {
      // add item to the "running total"
      currentSum = reducer(currentSum, val, key);
    }
  });
  return currentSum; // return the final total
}
