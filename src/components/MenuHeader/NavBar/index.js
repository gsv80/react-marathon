import { useState } from 'react';
import cn from 'classnames';
import s from './style.module.css'

function NavBar( {burgerOpen, isActive, bgActive = false} ) {

    


    return (
        // <nav className={cn(s.root)}>
        <nav id={s.navbar} className={cn(s.root, {[s.bgActive] : bgActive})}>

            <div className={cn(s.navWrapper)}>
                <p className={cn(s.brand)}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, {[s.active] : isActive})} onClick = {burgerOpen}>
                <span />
                </a>
            </div>
        </nav>
    )
}

export default NavBar;
