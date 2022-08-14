import useCharacter from '../hooks/useCharacter'

const CardCharacter = ({ resident }) => {

    const character = useCharacter(resident)

    return (
        <article className='character-card' >
            <img src={character?.image} />
            <div className='info'>
                <h2><span>Name:</span> {character?.name}</h2>
                <p> <span>Status:</span> {character?.status}</p>
                <p> <span>Origen:</span>  {character?.origin.name}</p>
                <p> <span>Episode:</span> {character?.episode.length}</p>
            </div>
        </article>
    )
}

export default CardCharacter