import { useState } from 'react';
import Menu from './Menu/index.js';
import NavBar from './NavBar/index.js';

function MenuHeader({bgActive}) {

    const [isActive, setActive] = useState(null);
    const burgerChanged = () =>{
        setActive (!isActive);
        
    }  


    return (
        <div>
            <Menu 
                isActive ={isActive}
                
                
                />
            
            <NavBar 
                isActive ={isActive}
                burgerOpen = {burgerChanged}
                bgActive = {bgActive}
            
            />
        </div>
    )
}

export default MenuHeader;
