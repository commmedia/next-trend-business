import Link from 'next/link'
import moment from 'moment'
import GaritmicConfig from '../../garitmic.config.json'


export default class Footer extends React.Component {

    render() {
        return (
            <footer id="Footer">
                <div className="halo smush">
                    <div className="layer small-12 medium-3">
                        <img src="https://via.placeholder.com/200" />
                    </div>
                    <div className="layer small-12 medium-8">
                        <p>COPYRIGHT © 2020 COMM Media Network. Prohibida su reproducción total o parcial, así como su traducción a cualquier idioma sin autorización escrita de su titular. TrendNews.com.co y TrendBusiness.com.co son marcas registradas y propiedad de COMM Media Network S.A.S.</p>
                    </div>
                </div>
            </footer>
        );
    }
}
