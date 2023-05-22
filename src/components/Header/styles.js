import { makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    navItem: {
        '&:hover': {
            color: '#E9B10A',
          }
    },
    rs3: {
        color: '#E9B10A'
    },
    rs3Border: {
        borderBottom: '2px solid #E9B10A',
        boxSizing: 'border-box'
    },
    rightContainer: {
        display: 'flex',
        gap: 12,
        flexDirection: 'row',
        flexGrow: 0
    },
    select: {
        border: 'none',
        '&:before': {
            borderColor: 'white',
        },
        '&:after': {
            borderColor: 'white',
        },
        '&:not(.Mui-disabled):hover::before': {
            borderColor: 'white',
        },
    },
    icon: {
        fill: 'white',
    },
    root: {
        color: 'white',
    },
  });
});

export default useStyles;