import AttrBox from "./AttrBox";

function HeroAttributes({ hero}) {
    const strength = `https://api.opendota.com/apps/dota2/images/dota_react/icons/hero_strength.png`
    const agility = `https://api.opendota.com/apps/dota2/images/dota_react/icons/hero_agility.png`
    const intelligence = `https://api.opendota.com/apps/dota2/images/dota_react/icons/hero_intelligence.png`

    const {base_str,str_gain,base_agi,agi_gain,base_int,int_gain} = hero

    return ( 
        <>
            <div className="heroPage__attr">
                <AttrBox
                    imgSrc={strength}
                    mainAttr={base_str}
                    gainAttr = {str_gain.toFixed(1)}
                />
                <AttrBox
                    imgSrc={agility}
                    mainAttr={base_agi}
                    gainAttr = {agi_gain.toFixed(1)}
                />
                <AttrBox
                    imgSrc={intelligence}
                    mainAttr={base_int}
                    gainAttr = {int_gain.toFixed(1)}
                />
            </div>

        </>
     );
}

export default HeroAttributes;
