"use client"



import { useRouter } from "next/navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import { persistor, store } from "@/redux/store";
import Login from "./login/page";

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <Login/>
      </PersistGate>
    </Provider>
  );
};

export default App;