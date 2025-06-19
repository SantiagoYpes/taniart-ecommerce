import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useState } from 'react';
import { Tune } from '@mui/icons-material'
import { CatFilter } from './CatFilter';
import { PriceFilter } from './PriceFilter';
import { Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Search, StyledInputBase, SearchIconWrapper } from '../styles/StyledSearchBar';

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
            <Stack direction='row' spacing={1}>
                <Button variant='outlined' sx={{
                    color: 'white',
                    borderColor: 'white',
                }} onClick={toggleDrawer(true)} startIcon={<Tune />}>Filtros</Button>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Buscar..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Stack>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor='top'>
                {DrawerList}
            </Drawer>
        </div>
    )
}
