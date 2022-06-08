export interface Prod {
    id: number 
    value: string
    completed: boolean
}

export interface Props {
    productos: Array <{
        id: number
        value: string
        completed: boolean
    }>
    handleDelete : Function,
    handleToogle : Function,
}
