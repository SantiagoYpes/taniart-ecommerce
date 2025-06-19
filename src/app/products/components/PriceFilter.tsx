import * as React from 'react';
import { useState, useContext } from 'react';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { Grid, Input, Stack } from '@mui/material';
import ProductContext from '@/app/context/ProductsProvider';

function valuetext(value: number) {
    return `${value}$`;
}

export const PriceFilter = () => {
    const {filters, setFilters} = useContext(ProductContext)

    
    const [value, setValue] = useState<number[]>([filters.minPrice, filters.maxPrice]);
    const handleChange = (event: Event, newValue: number[]) => {
        setValue(newValue);
        setFilters(prev => ({ ...prev, maxPrice: Number(value[1]), minPrice: Number(value[0])}))

    };
    const handleMinInputChange = ( event: React.ChangeEvent<HTMLInputElement>) => {
        setValue([event.target.value === '' ? 0 : Number(event.target.value), value[1]]);

    };
    const handleMaxInputChange = ( event: React.ChangeEvent<HTMLInputElement>) => {
        setValue([value[0], event.target.value === '' ? 0 : Number(event.target.value)]);
    };
    const handleBlur = () => {
        if (value[0] < 0) {
            setValue([0, value[1]]);
        } else if (value[1] > 200) {
            setValue([value[0], 200]);
        }
    };
    return (
        <div className='w-full'>
            <Typography>Rango de Precio</Typography>
            <Stack direction='row' spacing={4}>
                <Grid>
                    <Input
                        sx={{ color: 'white', width:'50px' }}
                        value={filters.minPrice}
                        size="small"
                        color='secondary'
                        onChange={handleMinInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 10,
                            min: 0,
                            max: filters.maxPrice-1,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
                <Slider
                    getAriaLabel={() => 'Rango de precio'}
                    value={[filters.minPrice, filters.maxPrice]}
                    min={0}
                    max={200}
                    color='secondary'
                    step={10}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
                <Grid>
                    <Input
                        sx={{ color: 'white', width:'50px'}}
                        value={filters.maxPrice}
                        size='small'
                        color='secondary'
                        onChange={handleMaxInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 10,
                            min: filters.minPrice+1,
                            max: 200,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Stack>
        </div>
    );
}