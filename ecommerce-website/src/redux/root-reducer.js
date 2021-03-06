import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import diretoryReducer from "./diretory/diretory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    diretory: diretoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)