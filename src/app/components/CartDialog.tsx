import React from "react";
import {
    IconButton,
    Typography,
    List,
    Drawer,
    Card,
} from "@material-tailwind/react";
import {
    ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import {
    XMarkIcon,
} from "@heroicons/react/24/outline";
import Cart from "../products/components/Cart";

export function SidebarWithBurgerMenu() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <>
            <div>
                <IconButton placeholder={"Taniart"} color="white" variant="text" size="lg" onClick={openDrawer}>
                    {isDrawerOpen ? (
                        <XMarkIcon className="h-5 w-5 stroke-2" />
                    ) : (
                        <ShoppingBagIcon className="h-5 w-5 stroke-2" />
                    )}
                </IconButton>
                {isDrawerOpen && (
                    <div
                        onClick={closeDrawer}
                        className="fixed inset-0 backdrop-blur-sm z-[9998]"
                    ></div>
                )}
                <Drawer placeholder={"Taniart"} placement="right" open={isDrawerOpen} onClose={closeDrawer}>
                    <Card placeholder={"Taniart"}
                        shadow={false}
                        className="h-[calc(100vh-2rem)] w-full p-4 "
                    >
                        <div className="mb-2 flex items-center gap-4 p-4">
                            <img
                                src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
                                alt="brand"
                                className="h-8 w-8"
                            />
                            <Typography placeholder={"Taniart"} variant="h5" color="blue-gray">
                                Bolsa de Compras
                            </Typography>
                        </div>
                        <List placeholder={"Taniart"}>
                            <Cart/>
                        </List>
                    </Card>
                </Drawer>
            </div>
        </>
    );
}