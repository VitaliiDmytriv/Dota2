import '../../style/AbilityStats.scss'
import { nanoid } from 'nanoid'
import {URLCd,URLBase} from "../../constants/URLs"

function AbilityStats({ stats }) {

    const {dname,img,desc,attrib,behavior,lore,dmg_type,dispellable,bkbpierce,target_team, cd, mc} = stats

    function isPresent(key, obj) {
        return obj.hasOwnProperty(key) && obj[key].length > 0
    }

    function renderKeyValue(key, value, canMap) {
        const typeStr = typeof value === 'string'
        const isCd = key === 'cd'
        const isMc = key === 'mc'
        const isManaOrCd = isCd || isMc
        return (
            <div key={nanoid()} className={`key_value ${isManaOrCd && 'displayFlex'}`}>
                { 
                    isManaOrCd ?
                        isCd ? <img className='cdIcon' src={URLCd} alt="" /> : <span className='manaIcon'></span>
                        :
                        <span className="abilityStats__key">{canMap ? key : `${key} : `} </span>             
                }
                <span className="abilityStats__value">
                    { typeStr ? value : canMap ? mapValues(value) : value[0]}
                </span>
            </div>
        )
    }

    function mapValues(values) {
        return values.map((value, index) => (
            <span key={nanoid()}> {index === values.length - 1? value : value + ' / ' } </span>
        ))
    }

    return (  
        <>
            <article className="abilityStats">
                <header className="abilityStats__header">
                    <div className="abilityStats__img">
                        <img src={`${URLBase}${img}` } alt="" />
                    </div>
                    <div>
                        <h2 className="abilityStats__heading">{ dname}</h2>
                        <p className="abilityStats__pAbout">{ desc}</p>
                    </div>
                </header>
                <div className="abilityStats__body">
                    <div className="abilityStats__body-2xGrid">
                        <div>
                            {isPresent('behavior', stats) && renderKeyValue('ABILITY', behavior, false)}
                            {isPresent('target_team', stats) && renderKeyValue('AFFECTS', target_team, false)}
                            {isPresent('dmg_type',stats) &&  renderKeyValue('DAMAGE TYPE',dmg_type,false) }
                        </div>
                        <div>
                            {isPresent('dispellable',stats) &&  renderKeyValue('dispellable',dispellable,false) }
                            {isPresent('bkbpierce',stats) &&  renderKeyValue('PIERCES SPELL IMMUNITY',bkbpierce,false) }
                        </div>
                    </div>
                    <div>
                        {attrib.map(property => {
                            return renderKeyValue(property.header, property.value, true)
                        })}
                    </div>
                    <div className='abilityStats__body-2xGrid'>
                        {isPresent('cd',stats) &&  renderKeyValue('cd',cd,true) }
                        {isPresent('mc',stats) &&  renderKeyValue('mc',mc,true) }
                    </div>
                    {isPresent('lore', stats) && <div className='abilityStats__legend'> { lore}</div>}
                </div>
            </article>
        </>
    );
}

export default AbilityStats
