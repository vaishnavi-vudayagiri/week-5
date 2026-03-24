import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UsersList from "./components/UsersList";

import Counter from "./components/Counter";

function App() {
return(
        <div>
            <Navbar/>
            <Counter/>
            <div className="m-16 min-h-screen  ">
                <UsersList/>
            </div>
           <Footer/>
        </div>
    );
}
export default App;

