import { useState } from "react";
import { URLBase } from '../api/URLs' 

function Video({name,ability,iconSrc}) {

    const [videoError, setVideoError] = useState(false)

    const URLVideo = `${URLBase}/apps/dota2/videos/dota_react/abilities/${name}/${ability}.webm`

    function handleError() {
        setVideoError(true)
    }

    function handleLoad() {
        setVideoError(false)
    }

    return ( 
        <>
            <div className="heroPage__videoAbility">
                <video src={URLVideo} loop autoPlay muted onLoadedData={handleLoad} onError={handleError}></video>
                {videoError && <h3 className="videoError">Can't find the video :&#40; <img src={`${URLBase}${iconSrc}`} alt="" /> </h3>}
            </div>
        </>
     );
}

export default Video;