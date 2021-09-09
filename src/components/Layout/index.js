import s from "./style.module.css";

const Layout = (props) => {
    let imgBg =props.urlBg;
    let background={
        backgroundImage: `url(${props.urlBg})`,
        backgroundColor:`${props.colorBg}`,
        backgroundSize: 'cover'
    };
    
    return (
        <section className={s.root} style= { background }>
            <div className={s.wrapper} >
                <article>
                    <div className={s.title}>
                        <h3>{props.title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc, s.full}>
                        <p>{props.desc}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;