import tasteBite from '../../assets/img/Logo_tastebite.png';

export default function Header(){
    return (
        <div className="Header">
            <img src={tasteBite} alt="logo-tasteBite" />
            <h1>POPULAR RECIPES</h1>
        </div>
    );
}