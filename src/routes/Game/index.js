import s from './style.module.css';

const GamePage = ({ onChangePage }) => {

    const handleClick =() => {
        console.log('####: <GamePage />');
        onChangePage && onChangePage('app');
    }
    return (
        <div>
            <p>This is Game Page!!!</p>
            <button onClick = {handleClick}>
                Back to Home page
            </button>

        </div>
    );
}

export default GamePage;