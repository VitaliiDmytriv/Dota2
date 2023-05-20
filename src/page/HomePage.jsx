import React, { useState, useEffect} from 'react';
import ImgCardHero from "../components/ImgCardHero";
import {URLHeroStats} from '../constants/URLs'
import useFetch from '../hooks/useFetch';
import SkeletHomePage from '../components/Skeletons/SkeletHomePage';
import {checkData} from '../utils/utils'

function App() {
    const skeletonArray = new Array(25).fill(0)

    let sortedHeroes = null
    const [heroes, setHeroes] = useState(null)
    const [inputValue, setInputValue] = useState('');

    const [allHeroes, loading, error] = useFetch(URLHeroStats)

    useEffect(() => {
        if (allHeroes) {
            sortedHeroes = sortAlphabetical(allHeroes)
            setHeroes(sortedHeroes)
        }
    },[allHeroes])  

    function sortAlphabetical(allHeroes) {
        return [...allHeroes]
            .sort((a,b)=> a.localized_name.localeCompare(b.localized_name))
    }

    function filterHeroesByInput(allHeroes, inputValue) {
        return allHeroes.filter(hero => hero.localized_name.toLowerCase().includes(inputValue.toLowerCase()))            
    }

    function renderHeroes(heroes) {
        return heroes.map(hero => <ImgCardHero hero={ hero} key={hero.id} />)
    }

    function handleInputChange(event) {
        const { value } = event.target
        setInputValue(value)

        const filteredHeroes = filterHeroesByInput(sortedHeroes,value)
        setHeroes(filteredHeroes);
    }    

    return (
        <main className="main">
            <section className="body">
                <div className="grid" >
                    <div className='searchBar'>
                        <input
                            type="text" 
                            name='input'
                            onChange={handleInputChange}
                            value={inputValue}
                            
                        />
                    </div>
                    {
                        loading ?
                            skeletonArray.map((skelet,id) => <SkeletHomePage key={id}/>)
                            :
                            checkData(heroes) && renderHeroes(heroes)
                            
                    }
                </div>
            </section>
        </main>
    )
    
}

export default App;
