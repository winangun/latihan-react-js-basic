import {useState} from 'react';
import './App.css';
import Data from './data/recipes';
import Header from './data/components/Header';
import Buttons from './data/components/Buttons';
import Cards from './data/components/Cards';
import Aside from './data/components/Aside';


function App() {
  const [item, setItems] = useState(Data);
  const [selectedItem, setSelectedItem] = useState(null);
  const menuItems = [...new Set(Data.map((val) => val.kategori))]

  const filterItems = (cat) => {
    const newItems = Data.filter((newval) => newval.kategori === cat);
    setItems(newItems);
  }

  const handleCardClick = (itemId) => {
    const clickedItems = item.find(item => item.id === itemId);
    setSelectedItem(clickedItems);
  }

  return (
    <>
      <Header />
      <div className='flex-layar'>
        <div>
          <Buttons 
            menuItems = {menuItems}
            filterItems = {filterItems}
            setItems = {setItems}
          />
          <Cards item={item} onItemClick={handleCardClick} />
        </div>
        <div>
          <Aside selectedItem={selectedItem} />
        </div>
      </div>
    </>
  );
}

export default App;
