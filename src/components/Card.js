import './Card.css';

const Card = ({id, name, sprite, types, height, weight, stats}) => {
    
    return (
        <div className='card card-m'>
            <p>{id}</p>
            <div className='container-img'>
                <img src={sprite} alt={name}/>
            </div>
            <p className='name'>{name}</p>
            <div className='container-type'>
            {types.map(el => (
                <p className={`type ${el.type.name}`}>{el.type.name}</p>
                ))}
            </div>
            <div className='info'>
                <p>Height: {height/10} m</p>
                <p>Weight: {weight/10} kg</p>
            </div>
            <div className='stats'>
                <p>{stats[0].stat.name}: {stats[0].base_stat}</p>
                <p>{stats[1].stat.name}: {stats[1].base_stat}</p>
                <p>{stats[2].stat.name}: {stats[2].base_stat}</p>
                <p>{stats[3].stat.name}: {stats[3].base_stat}</p>
                <p>{stats[4].stat.name}: {stats[4].base_stat}</p>
                <p>{stats[5].stat.name}: {stats[5].base_stat}</p>
            </div>
        </div>
    )
}

export default Card;