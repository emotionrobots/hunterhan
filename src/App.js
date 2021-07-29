import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './views/Dashboard';

function App() {
  return (
    <div class="flex flex-col h-screen p-6 bg-steel-grey overscroll-contain">
      <div class="flex flex-row max-w-full">
          <p class="text-white text-lg mb-6">People Counter</p>
          <div class="flex-grow mb-6"></div>
      </div>
      <div class="flex flex-row h-screen">
        <Sidebar></Sidebar>
        <Dashboard></Dashboard>
      </div>
    </div>
    
  );
}

export default App;
