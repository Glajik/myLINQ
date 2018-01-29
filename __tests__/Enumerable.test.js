import Enumerable from '../src/Enumerable';

describe('HexletLinq', () => {
  let coll;
  let cars;

  beforeEach(() => {
    cars = [
      { brand: 'bmw', model: 'm5', year: 2014 },
      { brand: 'bmw', model: 'm4', year: 2013 },
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

    const result2 = coll.where({ brand: 'bmw' });
    expect(result2.toArray()).toEqual([cars[0], cars[1]]);

    const result3 = coll.where({ brand: 'kia', model: 'sorento' });
    expect(result3.toArray()).toEqual([cars[2]]);

    const result4 = coll.where({ brand: 'kia' }, car => car.year < 2013);
    expect(result4.toArray()).toEqual([cars[3], cars[4]]);

    const result5 = coll.where({ year: 2009 });
    expect(result5.toArray()).toEqual([]);
  });

  it('#where 2', () => {
    const result = coll.where(car => car.year < 2014)
      .where(car => car.brand === 'kia', car => car.year > 2011);

    expect(result.toArray()).toEqual([cars[4]]);
  });
});
