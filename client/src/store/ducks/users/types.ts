/**
 * Action types
 */
export enum UsersTypes {
    LOAD_REQUEST = '@users/LOAD_REQUEST',
    LOAD_SUCCES = '@users/LOAD_SUCCES',
    LOAD_FAILURE = '@users/LOAD_FAILURE',
}
/**
 * Data types
 */

 export interface User {
     id: string
     name: string
}

/**
 * State type
 */
export interface UsersState{
    readonly data: User[]
    readonly loading: boolean
    readonly error: boolean
}