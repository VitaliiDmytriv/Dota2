function HealthAndMana({ hero}) {
    return ( 
        <>
            <div className="heroPage__health lifestyle">
                <span>{hero.base_health + hero.base_str * 20}</span>
                <span>+{ (hero.base_health_regen + 0.1 * hero.base_str).toFixed(2)}</span>
            </div>
            <div className="heroPage__mana lifestyle">
                <span>{ hero.base_mana + hero.base_int * 12}</span>
                <span>+{ (hero.base_mana_regen + 0.04 * hero.base_int +0.2).toFixed(2)}</span>
            </div>
        </>
     );
}

export default HealthAndMana;