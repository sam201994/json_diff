const checkIfBasicTypesAreEqual = (val1, val2) => {
  if (val1 === null && val2 === null) return true;
  return typeof val1 === typeof val2;
};

const isValidJsonObjects = (ob1, ob2) => {
  return typeof ob1 === typeof ob2 && typeof ob1 === 'object' && ob1 !== null;
};

const calculateScoreForJsonObjects = (ob1, ob2) => {
  let diffCount = 0;
  let sameCount = 0;

  if (!isValidJsonObjects(ob1, ob2)) return 'Invalid JSON objects';

  if (Object.keys(ob1).length === 0 && Object.keys(ob2).length === 0)
    return (1).toFixed(4);

  const diffInArrays = (a1, a2) => {
    if (a1.length !== a2.length) {
      diffCount += 1;
    }
    a1.forEach((item1, index) => {
      const val1 = item1;
      const val2 = a2[index];
      if (!checkIfBasicTypesAreEqual(val1, val2)) {
        diffCount += 1;
        return;
      }
      if (Array.isArray(val1)) {
        diffInArrays(val1, val2);
        return;
      }
      if (typeof val1 === 'object') {
        // eslint-disable-next-line
        diffInJsonObjects(val1, val2);
        return;
      }
      if (!(val1 === val2)) {
        diffCount += 1;
      }
    });
  };

  const diffInJsonObjects = (obj1, obj2) => {
    const set1 = new Set(Object.keys(obj1));
    const set2 = new Set(Object.keys(obj2));
    const union = new Set([...set1, ...set2]);

    union.forEach(key => {
      const val1 = obj1[key];
      const val2 = obj2[key];
      if (key in obj1 && key in obj2 && typeof key === 'string') {
        sameCount += 1;
      }
      if (!checkIfBasicTypesAreEqual(val1, val2)) {
        diffCount += 1;
        return;
      }
      if (Array.isArray(val1)) {
        diffInArrays(val1, val2);
        return;
      }
      if (typeof val1 === 'object') {
        diffInJsonObjects(val1, val2);
        return;
      }
      if (!(val1 === val2)) {
        diffCount += 1;
      }
    });
  };
  diffInJsonObjects(ob1, ob2);
  return (1 - diffCount / (sameCount + diffCount)).toFixed(4);
};

export default {
  calculateScoreForJsonObjects,
};
