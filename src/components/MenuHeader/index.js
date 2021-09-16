import { useState } from 'react';
import Menu from './Menu/index.js';
import NavBar from './NavBar/index.js';

function MenuHeader({onOpenBurger}) {

    const [isActive, setActive] = useState(null);
    const burgerChanged = () =>{
        setActive (!isActive);
        
    }  


    return (
        <div>
            <Menu 
                isActive ={isActive}
                onOpenBurger = {onOpenBurger}
                
                />
            
            <NavBar 
                isActive ={isActive}
                onOpenBurger = {burgerChanged}
            
            />
        </div>
    )
}

export default MenuHeader;
