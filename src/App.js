import "./App.css";
import { Cursor } from "./component/Cursor";
import CursorContextProvider from "./store/CursorContextProvider";
import { Button } from "./subComponents/Button";

function App({ children }) {
  return (
    <div className="App">
      <CursorContextProvider>
        <Cursor />
        <Button />
        {children}
      </CursorContextProvider>
    </div>
  );
}

export default App;
