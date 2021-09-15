import { useState } from 'react';
import Menu from '../Menu/index.js';
import NavBar from '../NavBar/index.js';

function MenuHeader({onOpenBurger}) {

    const [isActive, setActive] = useState(null);
    const burgerChanged = () =>{
        console.log('####: <pushed burger button />');
        setActive (!isActive);
        // console.log (state +" changedMenu");
        // changedMenu(state );
    }  


    return (
        <div>
            <Menu 
                isActive ={isActive}
                onOpenBurger = {onOpenBurger}

            />
            
            <NavBar 
                onOpenBurger = {burgerChanged}
            
            />
        </div>
    )
}

export default MenuHeader;
