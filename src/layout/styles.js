// import { makeStyles, createStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    mainLayout: {
      backgroundColor: theme.palette.background.default,
      height: 'auto !important',
      minHeight: '100vh',
    },
    mainContainer: {
        minHeight: '100vh',
        marginTop: '16px'
    }
  });
});

export default useStyles;