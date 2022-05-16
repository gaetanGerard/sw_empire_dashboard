import React, { createContext, useState, FC, ReactNode } from 'react';
import { WantedContextState, WANTED } from '../types';

const contextDefaultValue: WantedContextState = {
    wantedList: null,
    initializeWantedList: () => {},
    addWanted: () => {},
    updateWanted: () => {},
    deleteWanted: () => {},
    setWantedError: () => {},
    wantedError: null,
};

type WantedProviderProps = {
    children: ReactNode;
}

export const WantedContext = createContext<WantedContextState>(contextDefaultValue);

const WantedProvider: FC<WantedProviderProps> = ({children}) => {
    const [wantedList, setWantedList] = useState<WANTED[]|null>(null);
    const [wantedError, setWantedError] = useState<string|null>(null);

    const initializeWantedList = (payload: WANTED[]) => {
        setWantedList(payload);
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

    const deleteWanted = (id: string) => {
        if(wantedList) {
            const newWantedList = wantedList.filter((item: WANTED) => {
                return item.id !== id;
            });
            setWantedList(newWantedList);
        }
    };

    return (
        <WantedContext.Provider value={{initializeWantedList, wantedList, wantedError, addWanted, updateWanted, deleteWanted, setWantedError}}>
            {children}
        </WantedContext.Provider>
    );
}

export default WantedProvider;