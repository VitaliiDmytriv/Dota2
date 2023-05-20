import '../style/ImgCardHero.scss'
import { NavLink } from 'react-router-dom';
import {URLBase,URLAttr} from '../constants/URLs'

function ImgCardHero({ hero }) {
    
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
                            src={URLAttr(primary_attr)} alt="" />
                        <h3>{ localized_name}</h3>
                    </div>
                </div>
            </NavLink>
        </>
    );
}

export default ImgCardHero;