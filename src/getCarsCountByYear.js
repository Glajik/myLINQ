const getCarsCountByYear = (listCars) => {
  const iter = (acc, obj, ...rest) => {
    if (!obj) return acc;
    
    const { year } = obj;
    const { [year]: count = 0} = acc;
    return iter({...acc, [year]: count + 1}, ...rest);
  }
  return iter({}, ...listCars);
};

export default getCarsCountByYear;