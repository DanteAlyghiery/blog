import { NavLink } from 'react-router-dom'
import c from './HeaderNav.module.css'
import logoImg from '../files/logoBlog.svg'
import HeaderHero from './headerHero/HeaderHero'

const HeaderNav = () => {
    return (
        <div className={c.headerContent}>
            <div className={c.nav}>
                <div className={c.logoPart}>
                    <div className={c.logo}>
                        <img src={logoImg} alt="" className={c.logoImg} />
                    </div>
                    <div className={c.logoText}>
                        Irenka
                    </div>
                </div>

                <div className={c.navMenu}>
                    <NavLink to="/blog"  >
                        <div className={c.navMenuLinks}  > 
                            Blog
                        </div>
                    </NavLink>

                    <NavLink to="/about">
                        <div className={c.navMenuLinks} > 
                            About
                        </div> 
                    </NavLink>

                    <NavLink to="/projects">
                        <div className={c.navMenuLinks} > 
                            Projects
                        </div> 
                    </NavLink>
            
                    <NavLink to="/Cabinet">
                        <div className={c.navMenuLinks} > 
                            Cabinet
                        </div> 
                    </NavLink>
                </div>

            </div>

            <div className={c.hero}>
                <HeaderHero />
            </div>
        </div>
    )
}

export default HeaderNav