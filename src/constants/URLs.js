import { getMainAttr } from "../utils/utils";

const URLBase = "https://api.opendota.com";

const URLAbilitiesExpended = `https://raw.githubusercontent.com/odota/dotaconstants/master/build/abilities.json`;
const URLAbilities = `https://raw.githubusercontent.com/odota/dotaconstants/master/build/hero_abilities.json`;
const URLHeroStats = `https://api.opendota.com/api/heroStats`;

const URLCd =
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png";

function URLImgHero(name) {
    return `${URLBase}/apps/dota2/images/dota_react/heroes/${name}.png`;
}

function URLAttr(attr) {
    return `${URLBase}/apps/dota2/images/dota_react/icons/hero_${getMainAttr(
        attr
    )}.png`;
}

function URLVideo(name, ability) {
    return `${URLBase}/apps/dota2/videos/dota_react/abilities/${name}/${ability}.webm`;
}

export {
    URLBase,
    URLAbilitiesExpended,
    URLAbilities,
    URLHeroStats,
    URLCd,
    URLImgHero,
    URLAttr,
    URLVideo,
};
