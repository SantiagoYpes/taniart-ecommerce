import { ProductType } from "../../context/ProductsProvider"
import { ReducerActionType, ReducerAction } from "../../context/CartProvider"
import { ReactElement } from "react"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Button } from "@mui/material";
import { ShoppingBag } from "@mui/icons-material";

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean
}



const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {
    const img: string = `/img/${product.sku}.jpg`
    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })
    const itemInCart = inCart ? '-> Añadido ✔️' : null
    return (
        <Card elevation={10 } sx={{
            boxShadow: '0px 4px 20px rgba(128, 90, 213, 0.6)',
            backgroundColor: 'black',
            width: {
                xs: '90%',
                sm: '430px',
                md: '330px',
            },
            maxWidth: '100%',
            margin: '0 auto',
        }}>

            <CardMedia
                component="img"
                sx={{
                    width: {
                        xs: '90%',
                        sm: '430px',
                        md: '330px',
                    }, height: '320px'
                }}
                image={img}
                alt={product.name}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'white' }}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests.
                </Typography>
                <Typography variant="h6" sx={{color:'white'}}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)} {itemInCart} </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{justifyContent:'flex-end'}}>
                <IconButton aria-label="add to favorites" color="secondary">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share" color="primary">
                    <ShareIcon />
                </IconButton>

                <Button variant="outlined" sx={{ borderColor: 'white', color: 'white'}} endIcon={<ShoppingBag />} onClick={onAddToCart}>Añadir a la Bolsa</Button>
            </CardActions>
        </Card>
    );
}

export default Product