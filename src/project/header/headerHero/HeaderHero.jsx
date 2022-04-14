import c from './HeaderHero.module.css'
import heroOne from '../../files/heroOne.jpg'

const HeaderHero = () => {
    return (
        <div className={c.content}>
            <div className={c.heroOne}>
                <img src={heroOne} alt="" className={c.heroOne} />
            </div>
        </div>
    )
}

export default HeaderHero