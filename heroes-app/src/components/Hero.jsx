import './Hero.css';

function Hero(props) {
    return (
        <div className="hero-card">
            <h2 className="hero-title">{props.name}</h2>
            <p className="hero-universe">Вселенная: {props.universe}</p>
            <p className="hero-occupation">Род деятельности: {props.occupation}</p>
            <p className="hero-friends">Друзья: {props.friends}</p>
            <p className="hero-superpowers">Суперсилы: {props.superpowers}</p>
            <img src={props.url} alt={props.name}></img>
            <div className="hero-info">{props.info}</div>
        </div>
    );
}

export default Hero;