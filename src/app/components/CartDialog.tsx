import * as React from 'react';
import Cart from '../products/components/Cart';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { IconButton } from '@mui/material';
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
  const {totalItems} = useCart()
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box role="presentation" sx={{
      '& .MuiDrawer-paper': {
        width: '350px',
      }}}>
      <List>
        <ListItem >
          <Cart />
        </ListItem>
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton aria-label="cart" sx={{color:'white'}} onClick={toggleDrawer(true)}>
        <StyledBadge badgeContent={totalItems} color="secondary">
          <ShoppingBagIcon />
        </StyledBadge>
      </IconButton>

      <Drawer open={open} sx={{
        '& .MuiDrawer-paper': {
          width: '350px',
        },
      }} anchor='right' onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
