
import { Link } from 'react-router-dom';

import cn from 'classnames';
import s from './style.module.css';


const MENU =[
    { 
        to: '/home',
        title : 'HOME'
    },

    { 
        to: '/game',
        title : 'GAME'
    },

    { 
        to: '/about',
        title : 'ABOUT'
    },

    { 
        to: '/contacts',
        title : 'CONTACTS'
    },
];

const Menu =({ isActive}) => {

    let status  = isActive ? 'active' : 'deactive';
       

    return (
        <div className={cn(s.menuContainer, s[status])}>
            <div className={s.overlay} />
                <div className={s.menuItems}>
                    <ul>
                        {
                            MENU.map(({title, to}, index) => (
                            <li key={index}>
                                <Link to={to}>
                                    {title}
                                </Link>
                            </li>

                            ))
                        }
                    </ul>
                </div>
            </div>
    )
}

export default Menu;
