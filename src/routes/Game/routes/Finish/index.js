import { useContext } from "react";
import { PokemonContext } from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";
import s from './style.module.css';
import cn from "classnames";



const FinishPage = () => {

    const {pokemons}= useContext(PokemonContext);

    console.log('####: pokemons state after win/lose ', pokemons);
    return (
        
        <>
            <div className={s.wrapper}>

                <div className={s.root}>
                    {
                        Object.values(pokemons).map((item) =>(
                            <div className = {s.cardFinish}
                            >

                            <PokemonCard
                                className={s.card}
                                key={item.id}
                                name={item.name}
                                type={item.type} 
                                img={item.img} 
                                id={item.id}                                     
                                values={item.values} 
                                minimize
                                isActive
                                
                            />
                            </div>      
                        ))
                    }
                </div>

                <div>
                    <button classname={s.button} > END GAME</button>
                </div>


            </div>
        </>
                
        
    )
}

export default FinishPage;
