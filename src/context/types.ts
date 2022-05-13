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