import { useEffect } from "react";
import "./Units.scss";
import AgeSelector from "./Form/AgeSelector";
import CostSelectors from "./Form/CostSelectors";
import FilteredUnitsTable from "./FilteredUnitsTable";
import { updatePageTitle } from "../../redux/actionCreators/";

const Units = ({ pageTitle }) => {
  useEffect(() => {
    updatePageTitle(pageTitle);
  }, [pageTitle]);
  return (
    <div className="Units">
      <AgeSelector />
      <CostSelectors />
      <FilteredUnitsTable />
    </div>
  );
};

export default Units;
