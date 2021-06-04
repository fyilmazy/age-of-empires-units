import "./Units.scss";
import AgeSelector from "./Form/AgeSelector";
import CostSelectors from "./Form/CostSelectors";
import FilteredUnitsTable from "./FilteredUnitsTable";

const Units = () => {
  return (
    <div className="Units">
      <AgeSelector />
      <CostSelectors />
      <FilteredUnitsTable />
    </div>
  );
};

export default Units;
