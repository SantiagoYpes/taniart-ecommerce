import * as React from 'react';
import Cart from '../products/components/Cart';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { IconButton, Typography } from '@mui/material';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import useCart from '../hooks/useCart';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    top: 5,
    padding: '0 4px',
  },
}));

export const CartDialog = () => {
  const { totalItems } = useCart()
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box role="presentation" sx={{
      '& .MuiDrawer-paper': {
        width: '35%',
        padding: '5px'
      }
    }}>
      <List>
        <ListItem >
          <Cart />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <IconButton aria-label="cart" sx={{ color: 'white' }} onClick={toggleDrawer(true)}>
        <StyledBadge badgeContent={totalItems} color="secondary">
          <ShoppingBagIcon />
        </StyledBadge>
      </IconButton>

      <Drawer open={open} sx={{
        '& .MuiDrawer-paper': {
          width: '35%',
        },
      }} anchor='right' onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
