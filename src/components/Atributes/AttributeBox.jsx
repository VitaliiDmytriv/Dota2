function AttributeBox({imgSrc,mainAttr, gainAttr}) {

    return ( 
        <>
            <div className="heroPage__attrBox">
                <img className="imgAttr" src={imgSrc} alt="" />
                <span>{ mainAttr}</span>
                <span className="smallText">+{ gainAttr}</span>
            </div>
        </>
     );
}

export default AttributeBox;