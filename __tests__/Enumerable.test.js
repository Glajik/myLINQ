import Enumerable from '../src/Enumerable';

describe('HexletLinq', () => {
  let coll;
  let cars;

  beforeEach(() => {
    cars = [
      { brand: 'bmw', model: 'm4', year: 2013 },
      { brand: 'bmw', model: 'm5', year: 2014 },
      { brand: 'kia', model: 'sorento', year: 2014 },
      { brand: 'kia', model: 'rio', year: 2010 },
      { brand: 'kia', model: 'sportage', year: 2012 },
    ];
    coll = new Enumerable(cars);
  });

  it('#where', () => {
    const result = coll
      .where(car => car.brand === 'kia')
      .where(car => car.year > 2011);

    expect(result.toArray()).toEqual([cars[2], cars[4]]);
  });

  it('#orderBy', () => {
    const result = coll.orderBy(car => car.year)
      .select(car => car.model);

    expect(result.toArray()).toEqual(['rio', 'sportage', 'm4', 'm5', 'sorento']);
  });

  it('#order with numbers', () => {
    const coll2 = new Enumerable([5, 8, 7, 1, 2, 3, 4, 6, 9, 10, 11, 12, 13]);
    const result = coll2.orderBy(v => v);
    expect(result.toArray()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  });

  it('#orderBy with where', () => {
    const result = coll.orderBy(car => car.year)
      .where(car => car.brand === 'kia')
      .select(car => car.model);

    expect(result.toArray()).toEqual(['rio', 'sportage', 'sorento']);
  });

  it('#OrderBy for strings', () => {
    const result = coll.orderBy(car => car.model)
      .select(car => car.model);

    expect(result.toArray()).toEqual(['m4', 'm5', 'rio', 'sorento', 'sportage']);
  });

  it('#orderByDesc', () => {
    const result = coll.orderBy(car => car.year, 'desc')
      .where(car => car.brand === 'bmw')
      .select(car => car.model);

    expect(result.toArray()).toEqual(['m5', 'm4']);
  });

  it('#select', () => {
    const result = coll
      .select(car => car.brand);
    expect(result.toArray()).toEqual(['bmw', 'bmw', 'kia', 'kia', 'kia']);
  });
});
