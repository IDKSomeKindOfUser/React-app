import './Header.modules.css'
import SelectUser from "../SelectUser/SelectUser.jsx";
import Button from "../Button/Button.jsx";
import {useState} from "react";
import Logo from "../Logo/Logo.jsx";

const logos = ['/public/logo.svg', '/public/vite.svg'];

function Header() {
    const [logoIndex, setLogoIndex] = useState(0);

    const changeLogo = () => {
        setLogoIndex(state => Number(!Boolean(state)));
    }

    return (
        <>
            <Logo image={logos[logoIndex]}/>
            <SelectUser/>
            <Button onClick={changeLogo}>Change logo</Button>
        </>
    )
}

export default Header