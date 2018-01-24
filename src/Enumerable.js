class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }

  orderBy(fn, order = 'asc') {    
    this.collection.sort((a, b) => {
      if (order === 'desc') return fn(a) < fn(b) ? 1 : -1;
      return fn(a) > fn(b) ? 1 : -1;
    });
    return this;
  }

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection.slice();
  }
}

export default Enumerable;
