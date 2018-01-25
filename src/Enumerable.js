class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
		this.operations = operations || [];
  }

  select(fn) {
		const newOps = this.operations.slice();
		const selecting = collection => collection.map(fn);	
		newOps.push(selecting);
    return new Enumerable(this.collection.slice(), newOps);
  }

  orderBy(fn, direction = 'asc') {
		const newOps = this.operations.slice();
    const orderingBy = collection => collection.sort(
      (a, b) => {
        if (direction === 'desc') return fn(a) < fn(b) ? 1 : -1;
        return fn(a) > fn(b) ? 1 : -1;
      }
    );
		newOps.push(orderingBy);
    return new Enumerable(this.collection.slice(), newOps);
  }

  where(fn) {
		const newOps = this.operations.slice();
		const filtering = collection => collection.filter(fn);
		newOps.push(filtering);
    return new Enumerable(this.collection.slice(), newOps);
  }

  toArray() {
		const newCollection = this.operations.reduce((result, func) => func(result).slice(), this.collection.slice());
    return newCollection;
  }
}

export default Enumerable;