import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";

const middleware = applyMiddleware(thunk, createLogger());

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["posts"],
  debug: true
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

// persistor.purge();

export { store, persistor };
