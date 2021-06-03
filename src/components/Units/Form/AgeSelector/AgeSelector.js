import "./AgeSelector.scss";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import StyledRadio from "./StyledRadio";

/**
 * Renders age selection form
 */

const AgeSelector = ({ handleFormAge }) => {
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
            onClick={(e) => handleFormAge(e)}
            control={<StyledRadio label="All" />}
          />

          <FormControlLabel
            value="dark"
            onClick={(e) => handleFormAge(e)}
            control={<StyledRadio label="Dark" />}
          />

          <FormControlLabel
            value="feudal"
            onClick={(e) => handleFormAge(e)}
            control={<StyledRadio label="Feudal" />}
          />

          <FormControlLabel
            value="castle"
            onClick={(e) => handleFormAge(e)}
            control={<StyledRadio label="Castle" />}
          />

          <FormControlLabel
            value="imperial"
            onClick={(e) => handleFormAge(e)}
            control={<StyledRadio label="Imperial" />}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default AgeSelector;
