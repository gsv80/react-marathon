import s from "./style.module.css";

const Header = () => {
    return (
        <div className={s.root}>
            
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>This is title</h1>
                <p>This is Description</p>
            </div>
        </div>
    )
}

export default Header;