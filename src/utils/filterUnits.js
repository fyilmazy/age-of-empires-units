const Age = {
  dark: 1,
  feudal: 2,
  castle: 3,
  imperial: 4,
  all: 5,
};

const filterAges = (unit, selectedAge) => {
  const unitAge = unit.age.toLowerCase();
  return Age[unitAge] <= Age[selectedAge];
};

const filterMaterial = (unit, selectedMaterial, min = 0, max = 200) => {
  const unitValue = unit.cost?.[selectedMaterial];
  if (!unitValue) {
    return false;
  }
  return unitValue <= max && unitValue >= min;
};

const getFilterResult = (units, filter) => {
  const { age, costs } = filter;
  const { food, wood, gold } = costs;

  let result = units.filter((unit) => filterAges(unit, age));

  if (food.isActive) {
    result = result.filter((unit) =>
      filterMaterial(unit, "Food", food.min, food.max),
    );
  }

  if (wood.isActive) {
    result = result.filter((unit) =>
      filterMaterial(unit, "Wood", wood.min, wood.max),
    );
  }
  if (gold.isActive) {
    result = result.filter((unit) =>
      filterMaterial(unit, "Gold", gold.min, gold.max),
    );
  }

  return result;
};

export default getFilterResult;
