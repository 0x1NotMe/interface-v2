import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as QuickIcon } from 'assets/images/quickIcon.svg';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  footer: {
    textAlign: 'center',
    '& p': {
      fontSize: 14,
      lineHeight: '24px',
      marginTop: 20
    }
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <QuickIcon />
      <Typography>
        © 2021 QuickSwap.
      </Typography>
    </Box>
  );
};

export default Footer;
