import Utils from './index';

import BreweriesMaster from '../../data/BreweriesMaster.json';
import BreweriesSample1 from '../../data/BreweriesSample1.json';
import BreweriesSample2 from '../../data/BreweriesSample2.json';
import BreweriesSample3 from '../../data/BreweriesSample3.json';
import BreweriesSample4 from '../../data/BreweriesSample4.json';
import BreweriesSample5 from '../../data/BreweriesSample5.json';

const getValue = (ob1, ob2) => {
  try {
    return Utils.calculateScoreForJsonObjects(JSON.parse(ob1), JSON.parse(ob2));
  } catch (e) {
    return 'Invalid JSON objects';
  }
};

describe('Run tests on sample data', () => {
  test('compare BreweriesMaster and BreweriesSample1', () => {
    expect(
      Utils.calculateScoreForJsonObjects(BreweriesMaster, BreweriesSample1)
    ).toEqual('1.0000');
  });
  test('compare BreweriesMaster and BreweriesSample2', () => {
    expect(
      Utils.calculateScoreForJsonObjects(BreweriesMaster, BreweriesSample2)
    ).toEqual('0.7547');
  });
  test('compare BreweriesMaster and BreweriesSample3', () => {
    expect(
      Utils.calculateScoreForJsonObjects(BreweriesMaster, BreweriesSample3)
    ).toEqual('0.9524');
  });
  test('compare BreweriesMaster and BreweriesSample4', () => {
    expect(
      Utils.calculateScoreForJsonObjects(BreweriesMaster, BreweriesSample4)
    ).toEqual('0.4000');
  });
  test('compare BreweriesMaster and BreweriesSample5', () => {
    expect(
      Utils.calculateScoreForJsonObjects(BreweriesMaster, BreweriesSample5)
    ).toEqual('0.9524');
  });
});

describe('Edge cases', () => {
  const example1 = {
    a: {
      b: () => {},
    },
  };
  const example2 = {4: '4'};
  const example3 = new Set([1, 2, 3]);
  const example4 = {
    a: 'ola',
  };
  test('JSON object should be a key value pair and value can be nnull, boolean, number, string or array', () => {
    expect(Utils.calculateScoreForJsonObjects(4, 4)).toEqual(
      'Invalid JSON objects'
    );
    expect(Utils.calculateScoreForJsonObjects(null, 4)).toEqual(
      'Invalid JSON objects'
    );
    expect(Utils.calculateScoreForJsonObjects('4', [4])).toEqual(
      'Invalid JSON objects'
    );
  });
  test('when objects are not in JSON format', () => {
    expect(getValue(example1, example1)).toEqual('Invalid JSON objects');
    expect(getValue(example2, example2)).toEqual('Invalid JSON objects');
    expect(getValue(example3, example3)).toEqual('Invalid JSON objects');
    expect(getValue(example4, example4)).toEqual('Invalid JSON objects');
  });
  test('empty object case', () => {
    expect(Utils.calculateScoreForJsonObjects({}, {})).toEqual('1.0000');
  });
});
