import { URLBase } from '../../constants/URLs' 

function AbilityIcon({ imgSrc, handleClick, isActive }) {
    
    const styles = {
        backgroundImage: `url(${URLBase}/apps/dota2/images/dota_react/abilities/${imgSrc}.png)`
    }

    return ( 
        <>
            <div
                className={`heroPage__ability ${isActive && 'active'}`}
                style={styles}
                onClick={()=> handleClick(imgSrc)}
            >
            </div>
        </> 
    );
}


export default AbilityIcon;