import './App.css';
import { BrowserRouter as Router ,Switch , Route } from "react-router-dom";
import Header from "./header/Header";


// Switch is used for identigying unique part
// without switch (/ because of this), we will see Home in every page
// 
function App() {
 return (
 <Router>
   <div>
   <Header />
   <Switch>
      <Route path="/login">Login</Route>
      <Route path="/register">Register</Route>
      <Route path="/"></Route>
     </Switch>
   </div>
 </Router>
 );
}

export default App;
