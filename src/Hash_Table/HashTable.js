class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WERID_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WERID_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      const pairs = this.keyMap[index];
      for (const pair of pairs) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
  }

  keys() {
    const keys = [];
    for (const data of this.keyMap) {
      if (data) {
        for (const pair of data) {
          if (!keys.includes(pair[0])) keys.push(pair[0]);
        }
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (const data of this.keyMap) {
      if (data) {
        for (const pair of data) {
          if (!values.includes(pair[1])) values.push(pair[1]);
        }
      }
    }
    return values;
  }
}

module.exports = HashTable;
