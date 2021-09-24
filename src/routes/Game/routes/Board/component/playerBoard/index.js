import { useState } from 'react';
import PokemonCard from "../../../../../../components/PokemonCard";
import cn from 'classnames';
import s from "./style.module.css";


const PlayerBoard = ({ cards, onClickCard, player }) => {

    const [isSelected, setSelected] = useState(null);

    return (
        <>

            {
                cards.map((item) =>(
                    <div className = {cn(s.cardBoard, {
                        [s.selected] : isSelected === item.id
                        })} 
                        onClick={()=>{
                            setSelected(item.id);
                            onClickCard && onClickCard({
                                player,
                                ...item,
                            });                        
                        }}
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

        </>
    )
}

export default PlayerBoard;
