export default function Cards({ item, onItemClick}){
    return (
        <div className="cards-container" >
            {item.map((val) => (
                <div key={val.id} className="card" onClick={() => onItemClick(val.id)}>
                    <div className="card-img">
                        <img src={val.gambar} alt="" />
                    </div>
                    <div className="card-contents">
                        <div className="kategori">Kategori {val.kategori}</div>
                        <div className="nama">{val.nama}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}