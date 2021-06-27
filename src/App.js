import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import Dashboard from './views/Dashboard';

function App() {
  return (
    <div class="h-screen p-6 bg-steel-grey overscroll-contain">
      <div class="flex flex-col h-full">
        <p class="text-white text-lg mb-6">People Counter</p>
        <Sidebar></Sidebar>
      </div>
      <Dashboard></Dashboard>
    </div>
    
  );
}

export default App;
