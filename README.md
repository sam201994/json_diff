# JSON Object Similarity Score

Write a program using JavaScript (Node) that will compare two json objects and give a score between 0 and 1 as to how similar they are, a score of 1 meaning the objects are identical. There are sample JSON files in the data directory for testing.

### Rules for calculating score
- keep two counters, `sameCount` and `diffCount`
- increment `diffCount` if any value does not match
- increment `sameCount` if keys in both objects are same
- formula - ```(1 - diffCount / (sameCount + diffCount))``` up to 4 decimals places
#### Exmaples 
```
{"abc": "abc"} {"abc": "abcb"} // 0.5 keys are same but values are different
```
```
const ob1 = {
    "abc": "[1]",
    "def": "def"
}
const ob2 = {
    "abc": "[1]",
    "xxx": "xxx"
}

// --> score = 0.3333, ob1 and ob2 has 1 same key-value pair and key "def" is missing in ob2 while key "xxx" is missing in ob1 
```
#### Scores from sample data
 - `BreweriesMaster` and `BreweriesSample1` -> 1.0000
 - `BreweriesMaster` and `BreweriesSample2` -> 0.7547
 - `BreweriesMaster` and `BreweriesSample3` -> 0.9524
 - `BreweriesMaster` and `BreweriesSample4` -> 0.4000
 - `BreweriesMaster` and `BreweriesSample5` -> 0.9524