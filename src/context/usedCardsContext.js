import React, { useState, useContext} from 'react';


export const UsedCardsContext= React.createContext([]);
// export const player2context= React.createContext([]);

export const UsedCardsProvider = (props) => {
    const [usedCards, setUsedCards] = useState([]);
    return (
        <UsedCardsContext.Provider value= {[usedCards, setUsedCards]} >
            {props.children}
        </UsedCardsContext.Provider>

    );
}