import "./Units.scss";
import { Link } from "react-router-dom";

const Units = () => {
  const testUnits = [
    {
      id: 1,
      name: "Archer",
      description:
        "Quick and light. Weak at close range; excels at battle from distance",
      expansion: "Age of Kings",
      age: "Feudal",
      cost: {
        Wood: 25,
        Gold: 45,
      },
      build_time: 35,
      reload_time: 2,
      attack_delay: 0.35,
      movement_rate: 0.96,
      line_of_sight: 6,
      hit_points: 4,
      range: 30,
      attack: 4,
      armor: "0/0",
      accuracy: "80%",
    },
    {
      id: 2,
      name: "Crossbowman",
      description: "Upgraded archer",
      expansion: "Age of Kings",
      age: "Castle",
      cost: {
        Wood: 25,
        Gold: 45,
      },
      build_time: 27,
      reload_time: 2,
      attack_delay: 0.35,
      movement_rate: 0.96,
      line_of_sight: 7,
      hit_points: 35,
      range: 5,
      attack: 5,
      armor: "0/0",
      attack_bonus: ["+3 spearmen"],
      accuracy: "85%",
    },
    {
      id: 3,
      name: "Arbalest",
      description: "Upgraded crossbowman",
      expansion: "Age of Kings",
      age: "Imperial",
      cost: {
        Wood: 25,
        Gold: 45,
      },
      build_time: 27,
      reload_time: 2,
      attack_delay: 0.35,
      movement_rate: 0.96,
      line_of_sight: 7,
      hit_points: 40,
      range: 5,
      attack: 6,
      armor: "0/0",
      attack_bonus: ["+3 spearmen"],
      accuracy: "90%",
    },
  ];

  const mappedUnits = testUnits.map((unit) => {
    return (
      <div>
        <Link to={"/units/" + unit.id}>
          <p>Name: {unit.name}</p>
        </Link>
        <p>ID: {unit.id}</p>
      </div>
    );
  });

  return (
    <div className="Units">
      <h3>Units</h3>
      {mappedUnits}
    </div>
  );
};

export default Units;
