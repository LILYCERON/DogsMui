import * as React from 'react';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Drawer } from '@mui/material';
import PermanentDrawerLeft from './Menu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchBar({ allDogs, filteredDogs, setFilteredDogs }) {
  const [searchTerm, setSearchTerm] = React.useState("")

  const [Menu, setMenu] = React.useState(false)

  /* 
   Esta función filtra los perros según el término de búsqueda
   Se ejecuta cada vez que el usuario escribe en el input.
   */

  function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase()
    setSearchTerm(searchTerm)

    const results = allDogs.filter(obj =>
      obj.name.toLowerCase().includes(searchTerm));
    setFilteredDogs(results);
  }

  function onClickMenu(event) {
    setMenu(!Menu)
  }
  console.log(Menu)
  const drawerWidth = 180;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: Menu ? "100%" : "100%",
          ml: Menu ? `${drawerWidth}px` : 0,
          transition: "width 0.3s ease-in-out, margin 0.3s ease-in-out"
        }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0.75 }}
            onClick={onClickMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Dogs API
          </Typography>
          <Search onChange={handleSearch} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        sx={{
          "& .MuiDrawer-paper": {
            mt: 8, // Mueve el Drawer debajo del AppBar
            width: drawerWidth,
            height: "calc(100% - 64px)", // Ajusta la altura sin provocar cambios bruscos
            display: "flex",
            flexDirection: "column",
            overflow: "hidden", // Evita la barra de desplazamiento momentánea
            transition: "transform 0.3s ease-in-out", // Transición fluida
            transform: Menu ? "translateX(0)" : "translateX(-100%)", // Desliza en lugar de desaparecer
          }
        }} open={Menu}>
        {/* Drawer (Ahora se controla con menuOpen) */}
        <PermanentDrawerLeft />
      </Drawer>
    </Box>
  );
}
