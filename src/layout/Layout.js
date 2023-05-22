import * as React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import useStyles from './styles';
import Header from '../components/Header';

export const Layout = ({ children, currency, setCurrency }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainLayout}>
        <Header currency={currency} setCurrency={setCurrency}/>
        <Container component="main" className={classes.mainContainer}>
          {children}
        </Container>
      </Box>
    </>
  );
};