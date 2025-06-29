import './App.css'
import Card from './assets/components/Card'
import heroes from './assets/components/heroes.json'

function App() {

  return (
    <div className='cardContainer'>
      {heroes.map((hero, index) => (
        <Card
          key={index}
          heroName={hero.name}
          universe={hero.universe}
          alterego={hero.alterego}
          occupation={hero.occupation}
          friends={hero.friends}
          superPowers={hero.superpowers}
          url={hero.url}
          info={hero.info}
        />
      ))}
    </div>
  )
}

export default App
