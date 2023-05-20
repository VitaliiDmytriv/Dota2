import { Skeleton } from "@mui/material";
import { useRef, useEffect, useState } from "react";

function SkeletHomePage() {
    const skeletonElement = useRef(null);

    const [skeletonHeight, setSkeletonHeight] = useState(0);

    useEffect(() => {
        const heigthOfSkeleton = getDomElementHeigth(skeletonElement);
        setSkeletonHeight(heigthOfSkeleton);
    }, []);

    function getDomElementHeigth(domElement) {
        if (domElement.current) {
            const { width } = window.getComputedStyle(domElement.current);
            return parseFloat(width) / (16 / 9);
        }
    }

    return (
        <Skeleton
            ref={skeletonElement}
            variant="rectangular"
            width={"100%"}
            height={skeletonHeight}
            animation="wave"
            sx={{ bgcolor: "grey.900" }}
        />
    );
}

export default SkeletHomePage;
