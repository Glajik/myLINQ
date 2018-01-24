# My implementation of LINQ
Implement a LINQ interface for work with collections, see class Enumerable.

It's training project on ES-2016, which I made by [Hexlet](https://ru.hexlet.io/?ref=161019) cources.
All right reserved by Hexlet(c)

## Usage
You need to bind your collection in Enumerable class. Then you can access to data using methods .select(), .where(), .orderBy(). You can combine it as you need.
```
cars = [
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];

coll = new Enumerable(cars);
```

## .select()
Convert each element of collections in new form.

*Parameters*

+ fn: Function

*Examples*

```
const result = coll.select(car => car.brand);
```

## .where()
Filters elements of collection based on a predicate.

*Parameters*

+ fn: Function

*Examples*

```
const result = coll
  .where(car => car.brand === 'kia')
  .where(car => car.year > 2011);
```

## .orderBy()
Sort elements of collection by ascending or descending direction. In first parameter set function to get data for sort. Direction of sort set in second parameter (optional), and can be 'asc' or 'desc'. By default direction set as 'asc';

*Parameters*

+ fn: Function // function to get data for sort
+ order: String // optional, 'asc' by default

*Examples*

```
const result = coll.orderBy(car => car.year, 'desc')
      .select(car => car.model);
```
