import {
    IconButton,
    Drawer,
    Card,
    Typography,
    Input,
    List,
    ListItem,
    Accordion,
    AccordionHeader,
    AccordionBody,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Alert,
} from "@material-tailwind/react";
import {
    Bars3Icon,
    XMarkIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export const SidebarWithBurgerMenu = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [open, setOpen] = useState(0);
    const [openAlert, setOpenAlert] = useState(true);

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);
    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    return (
        <>
            <IconButton
                placeholder="Taniart"
                variant="text"
                size="lg"
                onClick={openDrawer}
                className="fixed top-4 right-4 z-[9999] bg-white/20 text-white hover:bg-white/40"
            >
                {isDrawerOpen ? (
                    <XMarkIcon className="h-8 w-8 stroke-2" />
                ) : (
                    <ShoppingBagIcon className="h-8 w-8 stroke-2" />
                )}
            </IconButton>
            {isDrawerOpen && (
                <div className="fixed inset-0 z-[9997] bg-black/30 backdrop-blur-sm transition-opacity duration-300" onClick={closeDrawer}></div>
            )}
            <Drawer
                placeholder="Taniart"
                open={isDrawerOpen}
                onClose={closeDrawer}
                placement="right"
                className="fixed top-0 right-0 h-screen z-[9998]" // aseguramos que esté sobre el contenido
            >
                <Card
                    placeholder="Taniart"
                    color="transparent"
                    shadow={true}
                    className="h-[calc(100vh-2rem)] w-full p-4"
                >
                    <div className="mb-2 flex items-center gap-4 p-4">
                        <img
                            src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
                            alt="brand"
                            className="h-8 w-8"
                        />
                        <Typography placeholder="Taniart" variant="h5" color="blue-gray">
                            Bolsa de Compras
                        </Typography>
                    </div>
                    <div className="p-2">
                        <Input crossOrigin={""}
                            placeholder="Taniart"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            label="Search"
                        />
                    </div>
                </Card>
            </Drawer>
        </>
    );
}
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
} from "@material-tailwind/react";

export const PopoverWithImage = () => {
    return (
        <Popover placement="right-start">
            <PopoverHandler>
                <Button placeholder={"Taniart"}>More Info</Button>
            </PopoverHandler>
            <PopoverContent placeholder={"Taniart"} className="z-[999] grid w-[28rem] grid-cols-2 overflow-hidden p-0">
                <div className="p-4">
                    <Typography placeholder={"Taniart"} color="black" className="mb-2 text-lg font-bold">
                        Material Tailwind
                    </Typography>
                    <Typography placeholder={"Taniart"}
                        variant="small"
                        color="gray"
                        className="mb-14 font-normal text-blue-gray-500"
                    >
                        Material Tailwind is an easy to use components library for Tailwind
                        CSS and Material Design. It features multiple React and HTML
                        components, all written with Tailwind CSS classes and Material
                        Design guidelines.
                    </Typography>
                    <a href="#" className="-ml-3 inline-block">
                        <Button placeholder={"Taniart"}
                            size="sm"
                            variant="text"
                            className="flex items-center gap-x-2 capitalize"
                        >
                            Carrito
                        </Button>
                    </a>
                </div>

                <div className="min-h-full !w-full p-3">
                    <img
                        src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        alt="image"
                        className="h-full w-full rounded-lg object-cover"
                    />
                </div>
            </PopoverContent>
        </Popover>
    );
}