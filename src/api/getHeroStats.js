async function getHeroesStats(URL) {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error(error);
    }
}

export default getHeroesStats;
