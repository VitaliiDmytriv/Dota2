import '../style/ImgCardHero.scss'
import { NavLink } from 'react-router-dom';
import getMainAttr from '../function'


function ImgCardHero({ hero }) {

    const URLBase = 'https://api.opendota.com'
    
    const { localized_name, name, img, primary_attr} = hero

    // Задаю посилання для background img через стилі
    const styles = {
        backgroundImage: `url(${URLBase}${img})`
    }
    
    function changeName(name) {
        const startFrom = 'npc_dota_hero_'.length
        return name.slice(startFrom)
    }

    return (  
        <>
            <NavLink
                style={styles}
                className={`ImgCardHero__card `}
                to={`hero/${changeName(name)}`}
            >
                <div className='ImgCardHero__gradient'>
                    <div  className='ImgCardHero__hero-img'></div>
                    <div className='ImgCardHero__name'>
                        <img
                            src={`${URLBase}/apps/dota2/images/dota_react/icons/hero_${getMainAttr(primary_attr)}.png`} alt="" />
                        <h3>{ localized_name}</h3>
                    </div>
                </div>
            </NavLink>
        </>
    );
}

export default ImgCardHero;