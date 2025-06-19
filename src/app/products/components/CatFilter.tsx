import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useContext } from 'react';
import ProductContext from '@/app/context/ProductsProvider';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material';

type FiltersCatType = {
    category: string,
    subs: string[],
}
const FiltersCat: FiltersCatType[] = [
    { category: 'Collección', subs: ['Dibujo Plano', 'Ilustracion', 'Coral', 'Pecadora'] },
    { category: 'Collección', subs: ['Dibujo Plano', 'Ilustracion', 'Coral'] },
    { category: 'Collección', subs: ['Dibujo Plano', 'Ilustracion', 'Coral', 'Pecadora'] },
]
export const CatFilter = () => {
    const { filters, setFilters } = useContext(ProductContext)
    const toggleCollection = (collection: string) => {
        setFilters(prev => {
            const isSelected = prev.collection.includes(collection)
            const updated = isSelected
                ? prev.collection.filter(c => c !== collection)
                : [...prev.collection, collection]
            return { ...prev, collection: updated }
        })
    }
    const children = (subs: string[]) => (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 6, md: 8 }}>
                {subs.map((sub, index) => (
                    <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                        <FormControlLabel
                            key={index}
                            label={sub}
                            control={<Checkbox sx={{ color: 'white' }} checked={filters.collection.includes(sub)} onChange={() => toggleCollection(sub)} color='secondary' />}
                        /></Grid>
                ))}
            </Grid>
        </Box>
    );

    return (
        <div className='justify-items-center'>
            <Stack direction={'row'} spacing={4}>
                {FiltersCat.map((item, index) => <div key={index}>
                    <FormControlLabel
                        label={item.category}
                        control={
                            <Checkbox
                                checked={filters.collection.length === FiltersCat[0].subs.length}
                                indeterminate={filters.collection.length !== FiltersCat[0].subs.length}
                                color='secondary'
                            />
                        }
                    />
                    {children(item.subs)}
                    
                </div>
                )}
                
            </Stack>
        </div>
    );
}