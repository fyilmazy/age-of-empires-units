/**
 * Initial state for formControls state
 */

const formControlsDefault = {
  age: "all",
  costs: {
    food: {
      isActive: false,
      value: [50, 100],
      max: 100,
      min: 50,
    },
    wood: {
      isActive: false,
      value: [50, 100],
      min: 50,
      max: 100,
    },
    gold: {
      isActive: false,
      value: [50, 100],
      min: 50,
      max: 100,
    },
  },
};

export default formControlsDefault;
