import logo from "../assets/logo.png";
import InfoIcon from "@mui/icons-material/Info";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { PiChefHatDuotone } from "react-icons/pi";
import { FaBoxOpen } from "react-icons/fa";


export default function Navbar(){

    const [open, setOpen] = useState<boolean>(false)

    return(
        <nav className="navbar">

            <div>
                <img src={logo} alt="" className="logo" />
            </div>

            <div className="navbar-link">
                <a className="link" href="#">Sobre</a>
                <a className="link" href="#">Serviços</a>
                <a className="link" href="#">Chefs</a>
                <a className="link" href="#">Menu</a>
            </div>

            <div className="menu">
                <HiOutlineBars3 color="#fff" onClick={() => setOpen(true)} />
            </div>
            <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
                <Box
                    sx={{width: 250}}
                    role="presentation"
                    onClick={() => setOpen(false)}
                    onKeyDown={() => setOpen(false)}
                >
                    <List>

                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InfoIcon sx={{fontSize:30}} />
                                </ListItemIcon>
                                <ListItemText>
                                    <p className="list">Sobre</p>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <FaBoxOpen className="list-1" />
                                </ListItemIcon>
                                 <ListItemText><p className="list">Serviços</p>
                                 </ListItemText>
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PiChefHatDuotone className="list-1" />
                                </ListItemIcon>
                                 <ListItemText><p className="list">Chefs</p></ListItemText>
                            </ListItemButton>
                        </ListItem>

                        
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <RestaurantMenuIcon sx={{ fontSize: 30 }} />
                                </ListItemIcon>
                                 <ListItemText><p className="list">Menu</p></ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider/>
                </Box>
            </Drawer>
        </nav>
    )
}