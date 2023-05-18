import { useParams } from "react-router-dom"
import '../style/heroPage.scss'
import HeroAttributes from "../components/Atributes/HeroAttributes";
import HealthAndMana from "../components/Atributes/HealthAndMana";
import useHeroStats from "../hooks/heroStats";
import AbilityStats from "../components/Abilities/AbilityStats";
import Video from "../components/Video";
import Abilities from "../components/Abilities/Abilities";
import {URLBase,URLImgHero,URLAttr} from '../api/URLs'

import { useEffect } from "react";


function HeroPageExpanded() {
    const { name } = useParams()

    const { abilitiesExpend, hero, abilities, isLoading, ability, setAbility, setAbilities } = useHeroStats(name)

    function ScrollToTopOnPageChange() {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return null;
    }

    ScrollToTopOnPageChange()
    
    return ( 
        <>
            <div className="main">
                <div className="body">
                    {
                        isLoading ?
                            <div>Loading ...</div>
                            :
                            <div className="heroPage">
                                <div className="heroPage__title">
                                    <h2>{hero.localized_name}</h2>
                                    <img className="imgAttr"  src={URLAttr(hero.primary_attr)} alt="" />
                                </div>
                                <div className="heroPage__stats">
                                    <div className="heroPage__stats-grid">
                                        <div className="heroPage__img ">
                                            <img src={URLImgHero(name)} alt="" />
                                        </div>
                                        <HeroAttributes hero={hero}/>
                                    </div>
                                    <HealthAndMana hero={hero}/>
                                </div>
                                <div className="heroPage__videoAndAbilities">
                                    <Video ability={ability } name={name} iconSrc={hero.icon} />
                                    <Abilities URLBase={URLBase} abilities={abilities} ability={ability} setAbilities={setAbilities} setAbility= {setAbility} />
                                    <AbilityStats stats={abilitiesExpend[ability]} />
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
     );
}

export default HeroPageExpanded;