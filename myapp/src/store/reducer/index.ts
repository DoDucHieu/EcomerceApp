import { combineReducers } from "redux";
import { cartReducer, CartReducer } from "./cartReducer";
import { userReducer, UserReducer } from "./userReducer";

export interface RootReducer {
    userReducer: UserReducer;
    cartReducer: CartReducer;
}
export const rootReducer = combineReducers({
    userReducer,
    cartReducer,
});
