class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  // BEGIN (write your solution here)
  where(...args) {
    let listOps = [];
    args.forEach(fn => {
      if (typeof(fn) === 'function') {
        listOps.push(coll => 
          coll.filter(el => 
            fn(el)
          )
        );
      } else {
        Object.keys(fn).forEach(key =>
          listOps.push(coll => 
            coll.filter(el => 
              el[key] === fn[key]
            )
          )
        );
      }
    },
    this);
    return this.build(listOps);
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
