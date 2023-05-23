import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    navItem: {
      whiteSpace: "nowrap",

      "&:hover": {
        color: "#E9B10A",
      },
    },
    navActive: {
      position: "relative",
      whiteSpace: "nowrap",

      "&:after": {
        content: "''",
        borderBottom: "2px solid #E9B10A",
        width: "45%",
        position: "absolute",
        bottom: "-6px",
        left: 0,
      },
    },
    rightContainer: {
      display: "flex",
      gap: 12,
    },
  })
);

export default useStyles;
