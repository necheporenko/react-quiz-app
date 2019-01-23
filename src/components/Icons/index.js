import React from "react";
import PropTypes from "prop-types";

import IconEarth from "./elements/earth";
import IconFire from "./elements/fire";
import IconWater from "./elements/water";
import IconWind from "./elements/wind";
import IconXsEarth from "./elements/xs-earth";
import IconXsFire from "./elements/xs-fire";
import IconXsWater from "./elements/xs-water";
import IconXsWind from "./elements/xs-wind";

const Icon = ({ name, ...other }) => chooseIcon(name, other);

function chooseIcon(name, props) {
  switch (name) {
    case "earth":
      return <IconEarth {...props} />;
    case "fire":
      return <IconFire {...props} />;
    case "water":
      return <IconWater {...props} />;
    case "wind":
      return <IconWind {...props} />;

    case "xsEarth":
      return <IconXsEarth {...props} />;
    case "xsFire":
      return <IconXsFire {...props} />;
    case "xsWater":
      return <IconXsWater {...props} />;
    case "xsWind":
      return <IconXsWind {...props} />;

    default:
      return null;
  }
}

Icon.propTypes = {
  name: PropTypes.string
};

export default Icon;
