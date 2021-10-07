import "./App.css";
import Header from './Header'
import Sidebar from './Sidebar'
import Chatbar from './Chatbar'

function App() {
  return (
    <div className="app">
      <div>
      <Header />
      
      <div className="app-body">
        <Sidebar />
        <Chatbar />
      </div>
      </div>
    </div>
  );
}

export default App;
