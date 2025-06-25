'use client'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


export const GridItem = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'gray',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));