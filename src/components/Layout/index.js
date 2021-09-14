import cn from 'classnames';
import s from "./style.module.css";

const Layout = ({id, title, desc, colorBg, urlBg, children, ...props}) => {
    
    const backgroundSect={
            backgroundImage: 'url(' + urlBg + ')',
            backgroundColor:  colorBg,
            color: '#000',
            backgroundSize: 'cover'
    };
    
    return (
        <section 
            className={s.root} 
            style= { backgroundSect }
        >
            <div className={s.wrapper} >
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={cn(s.desc, s.full)}>
                        { children }
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;