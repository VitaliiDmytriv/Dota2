import { useParams } from "react-router-dom"
import '../style/heroPage.scss'
import getMainAttr from '../function'
import HeroAttributes from "../components/HeroAttributes";
import HealthAndMana from "../components/HealthAndMana";
import AbilityIcon from "../components/AbilityIcon";
import useHeroStats from "../hooks/heroStats";
import AbilityStats from "../components/AbilityStats";
import { useState } from "react";

function HeroPageExpanded() {
    const { name } = useParams()
    const [videoError, setVideoError] = useState(false)

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

    const { abilitiesExpend, hero, abilities, isLoading, ability, setAbility, setAbilities } = useHeroStats(name)

    console.log(abilitiesExpend);
    
    function handleClick(abilityName) {
        if (abilityName !== ability) {

            setAbility(abilityName);

            setAbilities(prev => (
                prev.map(ability => (
                    ability.abilityName === abilityName
                    ? { ...ability, isActive: true }
                    : { ...ability, isActive: false }
                ))
            ))
        }
    }

    function handleError() {
        setVideoError(true)
    }

    function handleLoad() {
        setVideoError(false)
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
                                    <img className="imgAttr"  src={URLAttr(hero.primary_attr)} alt="" />
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
                                            src={URLAbilityVideo(name, ability)} loop autoPlay muted onLoadedData={handleLoad} onError={handleError}
                                        ></video>
                                        {videoError && <h3 className="videoError">Can't find the video :&#40; <img src={`${URLBase}${hero.icon}`} alt="" /> </h3>}
                                    </div>

                                    <div className="heroPage__abilities" >
                                        {abilities.map((ability, id) => {
                                            const { abilityName, isActive } = ability
                                            
                                            if (abilityName !== 'generic_hidden' && !abilityName.includes('stop') && !abilityName.includes('end')) {
                                                return (
                                                    <AbilityIcon
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