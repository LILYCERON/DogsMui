import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { Box } from '@mui/material';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[600]),
  backgroundColor: green[400],
  '&:hover': {
    backgroundColor: green[500],
  },
}));
const Boxlanding= styled(Box)(
  {position:"fixed",
     height:"100%", 
     width:"100%", 
     border:"0.5rem solid red", 
     backgroundImage:"client/src/utils/background.jpg"
  }
)

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

function Landing() {
  return (
    <>
      <Boxlanding >
        <Stack  sx={{height:40 , width:'17rem'}} spacing={3} direction="column">
          <ColorButton href="/home" variant="contained">Registrarme</ColorButton>
          <BootstrapButton href="/invite" variant="contained" disableRipple>
            Explorar API
          </BootstrapButton>
        </Stack>
      </Boxlanding>
    </>
  );
}



export default Landing;
