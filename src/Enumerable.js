class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  // BEGIN (write your solution here)
	where(...predicates) {
    const fns = predicates.map((predicate) => {
      if (typeof predicate === 'function') {
        return coll => coll.filter(predicate);
      }

      const keys = Object.keys(predicate);
      return coll => coll.filter(element =>
        keys.every(key => predicate[key] === element[key]));
    });
    return this.build(fns);
  }
  // END

  get length() {
    return this.toArray().length;
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }
}

export default Enumerable;
