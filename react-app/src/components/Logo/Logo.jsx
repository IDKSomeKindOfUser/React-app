import './Logo.module.css'


function Logo({ image }) {
    return <img className={'logo'} src={image} alt="logo"/>
}

export default Logo;