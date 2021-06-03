import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";

/**
 *  Returns radio buttons to use inside AgeSelector
 */

const StyledRadio = (props) => {
  return (
    <Radio
      className="customRadio"
      disableRipple
      color="default"
      checkedIcon={
        <span className="checkedAgeBtn">
          <Button variant="contained" color="secondary">
            {props.label}
          </Button>
        </span>
      }
      icon={
        <span className="uncheckedAgeBtn">
          <Button variant="contained" color="primary">
            {props.label}
          </Button>
        </span>
      }
      {...props}
    ></Radio>
  );
};
export default StyledRadio;
