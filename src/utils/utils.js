import { useEffect } from "react";

function getMainAttr(attr) {
    let mainAttr;
    switch (attr) {
        case "int":
            mainAttr = "intelligence";
            break;
        case "agi":
            mainAttr = "agility";
            break;
        case "str":
            mainAttr = "strength";
            break;
        case "all":
            mainAttr = "universal";
            break;
        default:
            break;
    }
    return mainAttr;
}

function ScrollToTopOnPageChange() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

function checkData(data) {
    return data !== null;
}

export { getMainAttr, ScrollToTopOnPageChange, checkData };
