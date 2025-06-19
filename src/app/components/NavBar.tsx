"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { CartDialog } from "./CartDialog";
import { FiltersDialog } from "../products/components/FiltersDialog";

const typographyStyle = {
  cursor: 'pointer',
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
}
type PAGESTYPE = {
  page: string,
  route: string
}
const pages: PAGESTYPE[] = [{ page: 'PRODUCTOS', route: '/products' }, { page: 'MARCA', route: '/branding' }];


export const NavBar = () => {
  const router = useRouter();
  const actualRoute: string = usePathname()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{
      backgroundColor: 'black',
      color: 'white',
    }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => router.push('/')}
            sx={typographyStyle}
          >
            TANIART
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((objPage) => (
                <MenuItem key={objPage.page} onClick={() => { router.push(objPage.route) }}>
                  <Typography sx={{ textAlign: 'center' }}>{objPage.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => router.push('/')}
            sx={{
              mr: 2,
              cursor: 'pointer',
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TANIART
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            {pages.map((objPage) =>
            (
              <Button
                key={objPage.page}
                onClick={() => { router.push(objPage.route) }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {objPage.page}
              </Button>
            )
            )}
          </Box>
          <div className={actualRoute === "/products" ? '' : 'hidden'}>
            <FiltersDialog></FiltersDialog>

          </div>

          <Box sx={{ flexGrow: 0 }}>
            <CartDialog />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

