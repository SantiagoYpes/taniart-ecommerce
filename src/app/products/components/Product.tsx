import { ProductType } from "../../context/ProductsProvider"
import { ReducerActionType, ReducerAction } from "../../context/CartProvider"
import { ReactElement } from "react"
import { ListItemAvatar } from "@mui/material";
import { ListItemText } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Button, ListItem } from "@mui/material";
import { ShoppingBag } from "@mui/icons-material";
import { styled } from '@mui/material/styles';

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean
}

const CoverImage = styled('div')({
  width: 250,
  height: 250,
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
    height: '100%', 
    objectFit: 'cover',
    display: 'block', 
  },
});


const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {
    const img: string = `/img/${product.sku}.jpg`
    const onAddToCart = () => {
        toast.success('Agregado al carrito',{
            style:{
                background:'#232828',
                color:'#fff'
            }
        })
        dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })}
    const itemInCart = inCart ? '-> Añadido ✔️' : null
    return (
        <ListItem sx={{
            boxShadow: '0px 4px 20px rgba(128, 90, 213, 0.6)',
            backgroundColor: 'black',
            width: {
                xs: '90%',
                sm: '430px',
                md: '1500px',
            },
            gap:2

        }}>
            <ListItemAvatar>
                <CoverImage>
                    <img
                        alt="can't win - Chilling Sunday"
                        src={img}
                    />
                </CoverImage>
            </ListItemAvatar>
            <ListItemText>
                <Typography variant="h6" sx={{ color: 'white' }}> {product.name} </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                </Typography>
                <Typography variant="h6" sx={{ color: 'white' }}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)} {itemInCart} </Typography>
                <CardActions disableSpacing sx={{ justifyContent: 'flex-end' }}>
                    <IconButton aria-label="add to favorites" color="secondary">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" color="primary">
                        <ShareIcon />
                    </IconButton>

                    <Button variant="outlined" sx={{ borderColor: 'white', color: 'white' }} endIcon={<ShoppingBag />} onClick={onAddToCart}>Añadir</Button>
                </CardActions>
            </ListItemText>

        </ListItem>
    );
}

export default Product