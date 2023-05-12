import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import '../style/heroPage.scss'
import getMainAttr from '../function'
import HeroAttributes from "../components/HeroAttributes";
import HealthAndMana from "../components/HealthAndMana";
import Ability from "../components/Ability";
import useHeroStats from "../hooks/heroStats";

function HeroPageExpanded() {
    const { name } = useParams()

    const URLBase = 'https://api.opendota.com'

    function URLImgHero(name) {
        return `${URLBase}/apps/dota2/images/dota_react/heroes/${name}.png`
    }

    function URLAttr(attr) {
        return `${URLBase}/apps/dota2/images/dota_react/icons/hero_${getMainAttr(attr)}.png`
    }

    function URLAbilityVideo(heroName, abilityName) {
        return `${URLBase}/apps/dota2/videos/dota_react/abilities/${heroName}/${abilityName}.webm`
    }
    // ===================

    const {abilitiesExpend,hero,abilities,isLoading,ability,setAbility} = useHeroStats(name)


    function handleClick(abilityName) {
        if (abilityName !== ability) {
            console.log(abilityName);
            setAbility(abilityName);
        }
    }
    
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
                                    <img className="imgAttr" src={URLAttr(hero.primary_attr)} alt="" />
                                </div>
                                <div className="heroPage__stats">
                                    <div className="heroPage__stats-grid">
                                        <div className="heroPage__img ">
                                            <img src={URLImgHero(name)} alt="" />
                                        </div>
                                        <HeroAttributes
                                            hero={hero}   
                                        />
                                        
                                    </div>
                                    <HealthAndMana
                                        hero={hero}
                                    />
                                </div>
                                <div className="heroPage__videoAndAbilities">
                                    <div className="heroPage__videoAbility">
                                        <video
                                            src={URLAbilityVideo(name, ability)}
                                            loop
                                            autoPlay
                                            muted
                                        ></video>
                                    </div>

                                    <div className="heroPage__abilities" >
                                        {abilities.map((ability, id) => {
                                            const {abilityName,isActive} = ability
                                            if (abilityName !== 'generic_hidden' && !abilityName.includes('stop') && !abilityName.includes('end')) {
                                                return (
                                                    <Ability
                                                        URLBase={URLBase}
                                                        imgSrc={abilityName}
                                                        key={id}
                                                        handleClick={handleClick}
                                                        isActive={isActive}
                                                    />
                                                )
                                            }
                                        })}
                                    </div>            

                                </div>
                                
                            </div>
                    }
                </div>
            </div>
        </>
     );
}

export default HeroPageExpanded;