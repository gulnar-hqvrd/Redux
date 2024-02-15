import { COUNTER_DECREMENT , COUNTER_INCREMENT } from "./types";


export const increment = ()=>{
return{
    type:COUNTER_INCREMENT
}
}

export const decrement = ()=>{
    return{
        type:COUNTER_DECREMENT
    }
}