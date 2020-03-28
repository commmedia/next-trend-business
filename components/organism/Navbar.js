import Link from 'next/link'

export default class Navbar extends React.Component {


    render() {
        
        return (
            <header>
                <nav id="Navbar" className="navbar">
                    <div className="nav-wrapper">
                        <ul className="nav-list">
                            <li></li>
                            <li className="logo item">
                                <Link href='/' as="/">
                                    <a aria-label="Logo">
                                        <img src="http://via.placeholder.com/158x38" />
                                    </a>
                                </Link>
                            </li>
                            <li className="item">
                            </li>
                        </ul>
                        
                    </div>
                </nav>
            </header>
        );
    }
}
