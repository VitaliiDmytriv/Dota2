import React, { useState, useEffect, useRef } from 'react';
import ImgCardHero from "../components/ImgCardHero";
import getHeroesStats from '../api/getHeroStats';
import { Skeleton } from '@mui/material'

function App() {

    const URLHeroStats = `https://api.opendota.com/api/heroStats`;

    const skeletonArray = new Array(25).fill(0)
    const skeletonElement = useRef(null)

    const [heroes, setHeroes] = useState(null)
    const [allHeroes, setAllHeroes] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [skeletonHeight, setSkeletonHeight] = useState(0)
    
    useEffect(() => {

        getHeroesStats(URLHeroStats)
            .then(data => {
                const sortedHeroes = sortAlphabetical(data)
                setHeroes(sortedHeroes)
                setAllHeroes(sortedHeroes)
                setIsLoading(false)                
            })
        
    }, []); 

    useEffect(() => {
        const heigthOfSkeleton = getDomElementHeigth(skeletonElement)
        setSkeletonHeight(heigthOfSkeleton) 
    }, []);

    function getDomElementHeigth(domElement) {
        if (domElement.current) {
            const {width } = window.getComputedStyle(domElement.current)
            return parseFloat(width) / (16 / 9)
        }
    }    

    function sortAlphabetical(allHeroes) {
        return [...allHeroes]
            .sort((a,b)=> a.localized_name.localeCompare(b.localized_name))
    }

    function filterHeroesByInput(allHeroes, inputValue) {
        return allHeroes.filter(hero => hero.localized_name.toLowerCase().includes(inputValue.toLowerCase()))            
    }

    function renderHeroes(heroes) {
        return heroes.map(hero => {
            return (
                <ImgCardHero hero={ hero} key={hero.id} />
            )
        })
    }

    function handleInputChange(event) {
        const { value } = event.target
        setInputValue(value)

        const filteredHeroes = filterHeroesByInput(allHeroes,value)
        setHeroes(filteredHeroes);
    }    

    return (
        <main className="main">
            <div className="body">
                
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
                        isLoading ?
                            skeletonArray.map((skelet,id) => {
                                return (
                                    <Skeleton 
                                        ref = {skeletonElement}
                                        key ={id}
                                        variant='rectangular'
                                        width={'100%'}
                                        height={skeletonHeight}
                                        animation='wave'
                                        sx={{bgcolor: 'grey.900'}}
                                    />
                                )
                            })
                            
                            : 
                            renderHeroes(heroes)
                    }
                </div>
            </div>
        </main>
    )
    
}

export default App;
