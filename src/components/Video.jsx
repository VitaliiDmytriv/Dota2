import { useState } from "react";
import { URLBase,URLVideo } from '../constants/URLs' 

function Video({name,ability,iconSrc}) {

    const [videoError, setVideoError] = useState(false)

    function handleError() {
        setVideoError(true)
    }

    function handleLoad() {
        setVideoError(false)
    }

    return ( 
        <>
            <div className="heroPage__videoAbility">
                <video src={URLVideo(name,ability)} loop autoPlay muted onLoadedData={handleLoad} onError={handleError}></video>
                {videoError && <h3 className="videoError">Can't find the video :&#40; <img src={`${URLBase}${iconSrc}`} alt="" /> </h3>}
            </div>
        </>
     );
}

export default Video;