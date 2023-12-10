import "./App.css";
import Homepage from "./pages/homePage";
import { Route } from "react-router-dom";
import Chatpage from "./pages/chatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;