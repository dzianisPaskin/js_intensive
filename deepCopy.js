// const aObject = {
//   pUndefined: undefined,
//   pNull: null,
//   pString: "test string",
//   pArray: [1, 2, 3, 4],
//   pObj: {
//     pUndefined: undefined,
//     pNull: null,
//     pString: 1,
//     pArray: [1, 2, 3, 4],
//   },
//   pfunc: () => {
//     console.log("pfunc");
//   },
// };



function makeObjectDeepCopy(obj) {
  let copyObj = Array.isArray(obj) ? [] : {};
  let value;
  for (const key in obj) {
    value = obj[key];
    copyObj[key] = typeof value === "object" ? makeObjectDeepCopy(value) : value;
  }
  return copyObj;
}

//Big O: O(n + m)