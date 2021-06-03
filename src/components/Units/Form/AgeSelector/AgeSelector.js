import "./AgeSelector.scss";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import StyledRadio from "./StyledRadio";
import { connect } from "react-redux";
import { updateAge } from "../../../../redux/actions";

/**
 * Renders age selection form
 */

const AgeSelector = ({ handleFormAge, age }) => {
  return (
    <div className="ageSelector">
      <FormControl component="fieldset">
        <FormLabel component="legend">Ages</FormLabel>
        <RadioGroup
          defaultValue="all"
          color="primary"
          aria-label="outlined primary button group"
        >
          <FormControlLabel
            value="all"
            onClick={() => updateAge("all")}
            control={<StyledRadio label="All" />}
          />

          <FormControlLabel
            value="dark"
            onClick={() => updateAge("dark")}
            control={<StyledRadio label="Dark" />}
          />

          <FormControlLabel
            value="feudal"
            onClick={() => updateAge("feudal")}
            control={<StyledRadio label="Feudal" />}
          />

          <FormControlLabel
            value="castle"
            onClick={() => updateAge("castle")}
            control={<StyledRadio label="Castle" />}
          />

          <FormControlLabel
            value="imperial"
            onClick={() => updateAge("imperial")}
            control={<StyledRadio label="Imperial" />}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { age } = state.form;
  return { age };
};

export default connect(mapStateToProps)(AgeSelector);
