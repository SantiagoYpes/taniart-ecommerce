import { Tune } from '@mui/icons-material'
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

type FiltersCatType = {
    category: string,
    subs: string[],

}
const FiltersCat: FiltersCatType[] = [
    { category: 'Collection', subs: ['Niños', 'Pecadora', 'Calypso'] }
]
export const CheckBoxList = () => {
    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label="Child 1"
                control={<Checkbox checked={checked[0]} onChange={handleChange2} color='secondary' />}
            />
            <FormControlLabel
                label="Child 2"
                control={<Checkbox checked={checked[1]} onChange={handleChange3} color='secondary' />}
            />
        </Box>
    );

    return (
        FiltersCat.map(item => <div>
            <FormControlLabel
                label="Colección"
                control={
                    <Checkbox
                        checked={checked[0] && checked[1]}
                        indeterminate={checked[0] !== checked[1]}
                        onChange={handleChange1}
                        color='secondary'
                    />
                }
            />
            {children}
        </div>)

    );
}

export const FiltersDialog = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <div className='bg-black text-white justify-items-center'>
            <List>

                <ListItem disablePadding>
                    <CheckBoxList />
                </ListItem>

            </List>
        </div>
    );

    return (
        <>
            <Button variant='outlined' sx={{
                color: 'white',
                borderColor: 'white',
            }} onClick={toggleDrawer(true)} startIcon={<Tune />}>Filtros</Button>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor='top'>
                {DrawerList}
            </Drawer>
        </>
    )
}



