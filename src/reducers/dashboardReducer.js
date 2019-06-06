import { SEARCH_USER, SELECTED_USER } from "../constants/actionTypes";

export default(state={
    userName:"",
    user:[]
},action)=>{
    switch(action.type){
        case SEARCH_USER:
            return{
                ...state,
                
               word:action.value
            }
            case SELECTED_USER:
                return{
                    ...state,
                    user:action.data
                }
            default:
                {
                return state
                }
    }
}