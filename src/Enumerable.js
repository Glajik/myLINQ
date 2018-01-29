class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
		this.operations = operations || [];
  }
	
	build(fn) {
		const newOps = this.operations.slice();
		newOps.push(fn);
		return new Enumerable(this.collection.slice(), newOps);
	}

  select(fn) {
		const selecting = collection => collection.map(fn);	
    return this.build(selecting);
  }

  orderBy(fn, direction = 'asc') {
    const orderingBy = collection => collection.sort(
      (a, b) => {
        if (direction === 'desc') return fn(a) < fn(b) ? 1 : -1;
        return fn(a) > fn(b) ? 1 : -1;
      }
    );
    return this.build(orderingBy);
  }

  where(fn) {
		const filtering = collection => collection.filter(fn);
    return this.build(filtering);
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce(
				(result, func) => func(result).slice(), 
				this.collection.slice()
			);
    }
    return this.memo;
  }

  get length() {
    const result = this.toArray();
    return result.length;
  }
}

export default Enumerable;