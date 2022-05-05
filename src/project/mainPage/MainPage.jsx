import c from '../mainPage/MainPage.module.css'

const MainPage = () => {
    return (
        <div className={c.content}>
            
            <div className={c.wraper}>
                <div className={c.body}>
                    <div className={c.articles}>
                    
                        <div className={c.left}></div>

                        <div className={c.midle}>
                            <div className={c.article}>
                                <div className={c.img}></div>
                                <div className={c.title}>How to win?</div>
                            </div>

                            <div className={c.article}>
                                <div className={c.img}></div>
                                <div className={c.title}>How to win?</div>
                            </div>

                            <div className={c.article}>
                                <div className={c.img}></div>
                                <div className={c.title}>How to win?</div>
                            </div>

                            <div className={c.article}>
                                <div className={c.img}></div>
                                <div className={c.title}>How to win?</div>
                            </div>

                            <div className={c.article}>
                                <div className={c.img}></div>
                                <div className={c.title}>How to win?</div>
                            </div>

                            <div className={c.article}>
                                <div className={c.img}></div>
                                <div className={c.title}>How to win?</div>
                            </div>

                            <div className={c.article}>
                                <div className={c.img}></div>
                                <div className={c.title}>How to win?</div>
                            </div>

                            <div className={c.article}>
                                <div className={c.img}></div>
                                <div className={c.title}>How to win?</div>
                            </div>
                        </div>

                        

                        <div className={c.right}></div>

                    </div>

                    <div className={c.button}>
                        <button className="more">More</button>
                    </div>
                </div>
                <div className={c.footer}>
                    <div className={c.top}>
                        Lorem ipsum, dolor sit amet consectetur. Eligendi  sed libero unde, necessitatibus minima architecto qui. Perspiciatis, necessitatibus ex reiciendis quo numquam suscipit vitae esse, aspernatur
                    </div>

                    <div className={c.tittle}>
                        Irenka
                    </div>

                    <div className={c.subTittle}>
                        Blog about life, and intresting memory. Welcome for each other.
                    </div>

                    <div className={c.links}>
                            <a href="#" className={c.link}>Linkidin</a>
                            <a href="#" className={c.link}>Facebook</a>
                            <a href="#" className={c.link}>Instagram</a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage