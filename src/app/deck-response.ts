export interface DeckResponse {
    success:boolean
    deck_id:string
    remaining:number
    shuffled:boolean
}

export interface Cards{
    code:string
    image:string
    images:string
    value:number
    suit:string
}

export interface DrawResponse{
    success:boolean
    deck_id:string
    cards:Cards[]
    remaining:number
}
