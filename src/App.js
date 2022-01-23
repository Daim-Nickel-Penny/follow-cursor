import "./App.css";
import { Cursor } from "./component/Cursor";
import CursorContextProvider from "./store/CursorContextProvider";

function App({ children }) {
  return (
    <div className="App">
      <CursorContextProvider>
        <Cursor />
        {children}
      </CursorContextProvider>
    </div>
  );
}

export default App;
