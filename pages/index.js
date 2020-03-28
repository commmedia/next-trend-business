import Layout from '../components/organism/Layout'
import GalleryCarousel from '../components/molecules/GalleryCarousel'

export default class Home extends React.Component {
    render() {
        return(
            <Layout>
                <section className="smosh pad">
                    <p className="centertxt">AD 320X50</p>
                </section>
                <section className="smesh">
                    <GalleryCarousel>
                        <div className="purple pad"></div>
                        <div className="blue pad"></div>
                        <div className="teal-green pad"></div>
                        <div className="purple pad"></div>
                        <div className="blue pad"></div>
                        <div className="teal-green pad"></div>
                    </GalleryCarousel>
                </section>

                <div className="divider" />

                <section className="smush pad">
                    <div className="aureole one">
                        <div className="mod">
                            <div className="mode-detail aureole two">
                                <div className="block-img">
                                    <img src="https://via.placeholder.com/250" />
                                </div>
                                <div className="mod-content">
                                    <h3 className="mod-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed… Helvetica Bold 16</h3>
                                    <div className="cat">
                                        <span>Categoría</span>
                                    </div>
                                    <div className="tim">
                                    <time>Feb. 10 de 2020 · 10:28 p.m.</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="divider" />

                <section className="smosh pad">
                    <p className="centertxt">AD 300x250</p>
                </section>

                <section className="smush pad">
                    <div className="aureole one">
                        <div className="mod">
                            <div className="mode-detail aureole two">
                                <div className="block-img">
                                    <img src="https://via.placeholder.com/250" />
                                </div>
                                <div className="mod-content">
                                    <h3 className="mod-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed… Helvetica Bold 16</h3>
                                    <div className="cat">
                                        <span>Categoría</span>
                                    </div>
                                    <div className="tim">
                                    <time>Feb. 10 de 2020 · 10:28 p.m.</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="black pad"> 
                        <div className="smash">
                            <div className="mod centertxt">
                            <div className="mod-title">
                                <h3 className="h6 h1 mb0">Titulo destacado</h3>
                                <span>EDICIÓN ESPECIAL</span>
                            </div>
                            <div className="mod-media">
                                <img src="https://via.placeholder.com/350" />
                            </div>
                            <div className="mod-contet">
                                <p className="h6 bold">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed… Helvetica Bold 16
                                </p>
                                <time>Feb. 10 de 2020 · 10:28 p.m.</time>
                            </div>

                            </div>

                        </div>
                </section>
            </Layout>
        )
    }
}