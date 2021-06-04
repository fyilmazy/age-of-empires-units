const Age = {
  dark: 1,
  feudal: 2,
  castle: 3,
  imperial: 4,
  all: 5,
};

const filterAges = (unit, selectedAge) => {
  return Age[unit.age] <= Age[selectedAge]; // Imperial
};

const filterMaterial = (unit, selectedMaterial, min = 0, max = 200) => {
  const unitValue = unit.cost?.[selectedMaterial];
  if (!unitValue) {
    return false;
  }
  return unitValue <= max && unitValue > min;
};

const getFilterResult = (units, filter) => {
  const { age, costs } = filter;
  const { food, wood, gold } = costs;

  let result = units.filter((unit) => filterAges(unit, age));

  if (food.isActive) {
    result = result.filter((unit) =>
      filterMaterial(unit, "food", food.min, food.max),
    );
  }

  if (wood.isActive) {
    result = result.filter((unit) =>
      filterMaterial(unit, "wood", wood.min, wood.max),
    );
  }
  if (gold.isActive) {
    result = result.filter((unit) =>
      filterMaterial(unit, "gold", gold.min, gold.max),
    );
  }

  return result;
};

export default getFilterResult;

///
// const getFilterResult = (filter) => {
//     const { } = filter;
//     return getUnits().filter((unit) => {
//     return filterAges(unit, filter.selectedAge) &&
//       (filter.isWoodFilterActivated && filterMaterial(unit, "wood", filter.woodMin, filter.woodMax)) &&
//       (filter.isWoodFilterActivated && filterMaterial(unit, "wood", filter.woodMin, filter.woodMax)) &&
//       (filter.isWoodFilterActivated && filterMaterial(unit, "wood", filter.woodMin, filter.woodMax))

//   });
// };
