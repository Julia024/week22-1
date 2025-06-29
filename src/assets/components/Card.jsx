const Card = ({heroName, universe, alterego, occupation, friends, superPowers, url, info}) => {

    return (
        <div className="card">
            <h2>{heroName}</h2>
            <p>Вселенная: {universe}</p>
            <p>Альтер эго: {alterego}</p>
            <p>Род деятельности: {occupation}</p>
            <p>Друзья: {friends}</p>
            <p>Суперсилы: {superPowers}</p>
            <img src={url} className="img" alt="photo" />
            <p>{info}</p>
        </div>
    )
}
export default Card