export default function Aside({selectedItem}){
    if (!selectedItem){
        return null;// Menampilkan null jika prop selectedItem tidak terdefinisi
    }

    return(
        <div className="aside-border">
            <hr className="aside-garis"></hr>
            <div className="aside-container">
                <div className="aside-nama">
                    {selectedItem.nama}
                </div>
                <div className="aside-kategori">
                    Kategori {selectedItem.kategori}
                </div>
                <div className="aside-gambar">
                    <img src={selectedItem.gambar} alt="" />
                </div>
                <div className="aside-contents">
                    <h2>Bahan :</h2>
                    <ul>
                        {selectedItem.bahan.map((ingredient, index) => (
                            <li key={index}>{ingredient.nama_bahan}</li>
                        ))}
                    </ul>
                </div>
                <div className="aside-contents">
                    <h2>Peralatan yang dibutuhkan:</h2>
                    <ul>
                        {selectedItem.peralatan.map((tools, index) => (
                            <li key={index}>{tools}</li>
                        ))}
                    </ul>
                </div>
                <div className="aside-contents">
                    <h2>Langkah Membuat:</h2>
                    <ol>
                        {selectedItem.langkah.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}