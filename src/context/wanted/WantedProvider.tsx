import React, { createContext, useState, FC, ReactNode } from 'react';
import { WantedContextState, WANTED } from '../types';

const contextDefaultValue: WantedContextState = {
    wantedList: null,
    wanted: null,
    initializeWantedList: () => {},
    getWanted: () => {},
    addWanted: () => {},
    updateWanted: () => {},
    deleteWanted: () => {},
    setWanted: () => {},
    setWantedError: () => {},
    wantedError: null,
};

type WantedProviderProps = {
    children: ReactNode;
}

export const WantedContext = createContext<WantedContextState>(contextDefaultValue);

const WantedProvider: FC<WantedProviderProps> = ({children}) => {
    const [wanted, setWanted] = useState<WANTED|null>(null);
    const [wantedList, setWantedList] = useState<WANTED[]|null>(null);
    const [wantedError, setWantedError] = useState<string|null>(null);

    const initializeWantedList = (payload: WANTED[]) => {
        setWantedList(payload);
    };

    const getWanted = (id: number) => {
        if(wantedList) {
            for(let i = 0; i < wantedList.length; i++) {
                if(wantedList[i].id === id) {
                    setWanted(wantedList[i]);
                }
            }
        }
    };

    const addWanted = (wanted: WANTED) => {
        if(wantedList) {
            setWantedList([...wantedList, wanted]);
        }
    };

    const updateWanted = (wanted: WANTED) => {
        if(wantedList) {
            const newWantedList = wantedList.map((item: WANTED) => {
                if(item.id === wanted.id) {
                    return wanted;
                }
                return item;
            });
            setWantedList(newWantedList);
        }
    };

    const deleteWanted = (id: number) => {
        if(wantedList) {
            const newWantedList = wantedList.filter((item: WANTED) => {
                return item.id !== id;
            });
            setWantedList(newWantedList);
        }
    };

    return (
        <WantedContext.Provider value={{initializeWantedList, wanted, wantedList, wantedError, getWanted, addWanted, updateWanted, deleteWanted, setWanted, setWantedError}}>
            {children}
        </WantedContext.Provider>
    );
}

export default WantedProvider;