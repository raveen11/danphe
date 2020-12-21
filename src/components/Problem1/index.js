import { combineReducers } from "redux";
import    colorReducer    from "./reducer-user";
import reducer from "./colorReducer";

const allReducer=combineReducers({
    colors:colorReducer,
    random:reducer
})

export default allReducer