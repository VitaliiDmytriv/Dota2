export default function getMainAttr(attr) {
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
