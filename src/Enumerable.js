class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    // BEGIN (write your solution here)
    const mapped = this.collection.map(fn);
    return new Enumerable(mapped);
    // END
  }

  orderBy(fn, direction = 'asc') {
    // BEGIN (write your solution here)
    const result = this.collection.slice().sort(
      (a, b) => {
        if (direction === 'desc') return fn(a) < fn(b) ? 1 : -1;
        return fn(a) > fn(b) ? 1 : -1;
      }
    );

    return new Enumerable(result);
    // END
  }

  where(fn) {
    const filtered = this.collection.filter(fn);
    return new Enumerable(filtered);
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;