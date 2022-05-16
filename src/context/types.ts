// Auth Types
export type USER = {
    username: string,
    password: string
}

export type UserContextState = {
    user: USER | null,
    loginError: string | null,
    login: (user: USER) => void,
}

// Wanted Types

export type WANTED = {
    id: string,
    name: string,
    type: string,
    profession: string,
    species: string|null,
    droid: string|null,
    picture: string,
    status: string,
    threat_level: string,
    last_known_location: string,
    crimes: string,
    wanted_condition: string,
    bounty: string,
    canBeDeleted: boolean
}

export type WantedContextState = {
    wantedList: WANTED[] | null,
    wantedError: string | null,
    initializeWantedList: (payload: WANTED[]) => void,
    addWanted: (wanted: WANTED) => void,
    updateWanted: (wanted: WANTED) => void,
    deleteWanted: (id: string) => void,
    setWantedError: (error: string) => void,
}