import axios from "axios";

const getUnitsData = async (url) => {
  return await axios.get("aoeUnits.json").then((res) => res.data.units);
};

export default getUnitsData;
