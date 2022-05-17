import { ADD_BOOK } from "./Actions";


const initialState= {
    bookings: [ ]
};

const Reducer=(state=initialState, action)=>{
        switch (action.type) {
            
            case ADD_BOOK:
            return{...state.bookings, bookings: [...state.bookings, action.payload]};

            default:
                return state
        }
}
export default Reducer;