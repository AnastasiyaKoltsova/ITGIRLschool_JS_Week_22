import './App.css';
import heroes from './descriptionOfHeroes';
import Hero from './components/Hero';
import './components/Hero.css';

function App() {
  return (
    <div className="App">
      {
        heroes.map((hero) => 
          <Hero name={hero.name} universe={hero.universe} alterego={hero.alterego} occupation={hero.occupation} friends={hero.friends} superpowers={hero.superpowers} url={hero.url} info={hero.info}></Hero>
        )
      }
    </div>
  );
}

export default App;
