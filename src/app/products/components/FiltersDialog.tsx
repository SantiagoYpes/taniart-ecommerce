import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useState } from 'react';
import { Tune } from '@mui/icons-material'
import { CatFilter } from './CatFilter';
import { PriceFilter } from './PriceFilter';
import { styled, alpha, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.02),
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
    width: '700px',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    borderColor:'white',
    border:'1px solid white',
    borderRadius:'4px'
}));

export const FiltersDialog = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <div className='bg-black text-white justify-items-center'>
            <div className='w-1/2'>
                <List>
                    <ListItem disablePadding>
                        <CatFilter />
                    </ListItem>
                    <ListItem disablePadding>
                        <PriceFilter />
                    </ListItem>
                </List>
            </div>

        </div>
    );

    return (
        <div className='text-white'>
            <Stack direction='row'  spacing={2}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Buscar..."
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <Button variant='outlined' sx={{
                color: 'white',
                borderColor: 'white',
            }} onClick={toggleDrawer(true)} startIcon={<Tune />}>Filtros</Button>
            </Stack>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor='top'>
                {DrawerList}
            </Drawer>
        </div>
    )
}
