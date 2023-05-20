import AbilityIcon from "./AbilityIcon";

function AbilitiesList({ abilities,ability,setAbilities,setAbility }) {
    
    function handleClick(abilityName) {
        if (abilityName !== ability) {

            setAbility(abilityName);

            setAbilities(prev => (
                {
                    ...prev,
                    abilities: prev.abilities.map(ability => (
                        ability.abilityName === abilityName
                        ? { ...ability, isActive: true }
                        : { ...ability, isActive: false }
                ))
                }
            ))
        }
    }

    return (  
        <>
            <div className="heroPage__abilities" >
                {abilities.abilities.map((ability, id) => {
                    const { abilityName, isActive } = ability
                    
                    if (abilityName !== 'generic_hidden' && !abilityName.includes('stop') && !abilityName.includes('end')) {
                        return (
                            <AbilityIcon
                                imgSrc={abilityName}
                                key={id}
                                handleClick={handleClick}
                                isActive={isActive}
                            />
                        )
                    }
                    })}
            </div>
        </>
    );
}

export default AbilitiesList;