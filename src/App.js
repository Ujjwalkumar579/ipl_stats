/* eslint-disable react/jsx-pascal-case */

import './App.css';
import Tab_Switch from './components/Tabs/Tab_Switch';

// console.log(data);
function App() {
  window.addEventListener('scroll', () => {
    console.log("scrolled");
  })
  return (
    <div className="App">
      <Tab_Switch />
    </div>
  );
}

export default App;
