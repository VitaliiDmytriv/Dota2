import { useEffect, useState } from "react";
import { URLAbilitiesExpended, URLAbilities, URLHeroStats } from "../api/URLs";

export default function useHeroStats(name) {
    const [abilitiesExpend, setAbilitiesExpend] = useState(null);
    const [abilities, setAbilities] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hero, setHero] = useState("");
    const [ability, setAbility] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const heroesResponse = await fetch(URLHeroStats);
                const heroes = await heroesResponse.json();
                const foundHero = findHero(heroes, name);
                setHero(foundHero);

                const AllabilitiesResponse = await fetch(URLAbilities);
                const AllAbilities = await AllabilitiesResponse.json();

                console.log(AllAbilities);
                const abilities = createUpdatedAbilitiesArr(AllAbilities, name);
                setAbilities(abilities);
                setAbility(abilities.abilities[0].abilityName);

                const abilitiesExpandResponse = await fetch(
                    URLAbilitiesExpended
                );
                const abilitiesExpand = await abilitiesExpandResponse.json();
                setAbilitiesExpend(abilitiesExpand);

                setIsLoading(false);
            } catch (error) {
                // Обробка помилки
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    function findHero(dataArray, heroName) {
        return dataArray.find(
            (hero) => hero.name === changeNameForMatch(heroName)
        );
    }

    function changeNameForMatch(name) {
        return `npc_dota_hero_${name}`;
    }

    function findHeroAbilities(abilities, name) {
        return abilities[changeNameForMatch(name)];
    }

    function createUpdatedAbilitiesArr(abilities, name) {
        const heroAby = findHeroAbilities(abilities, name);
        // console.log(heroAby);
        return {
            ...heroAby,
            abilities: heroAby.abilities.map((ability, index) => {
                return index === 0
                    ? { abilityName: ability, isActive: true }
                    : { abilityName: ability, isActive: false };
            }),
        };
    }

    return {
        abilitiesExpend,
        hero,
        abilities,
        isLoading,
        ability,
        setAbility,
        setAbilities,
    };
}
