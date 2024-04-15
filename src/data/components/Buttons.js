import Data from '../recipes';

export default function Buttons({ menuItems, setItems, filterItems }){
    return(
        <div>
            <hr className='garis'></hr>
            <div className="Button">
                <button key='semua' onClick={() => setItems(Data)}>SEMUA</button>
                {   
                    menuItems.map(val => (
                        <button key={val} onClick={() => filterItems(val)}>{val}</button>
                    ))
                }
            </div>
            <hr className='garis'></hr>
        </div>
    )
}