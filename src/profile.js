import './profile.css';
import {
    Container,
    Navbar,
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';
import notificationIcon from "../src/images/notification-icon.svg";
import homeIcon from "../src/images/home-icon.svg";

function Profile() {
    return (
        <div className='main'>
            <Navbar className='navbar'>
                <div className='home-dropdown'>
                    <UncontrolledDropdown>
                        <DropdownToggle caret color='dark'>
                            <span>
                                <img src={homeIcon} alt='home' width={30} />
                            </span>
                        </DropdownToggle>
                        <DropdownMenu dark>
                            <DropdownItem>1</DropdownItem>
                            <DropdownItem>2</DropdownItem>
                            <DropdownItem>3</DropdownItem>
                            <DropdownItem>4</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
                <div className='search-bar'>
                    <input className='search-bar-input' placeholder="Search" />
                </div>
                <div className='notification-icon'>
                    <button className='notification-button'>
                        <img src={notificationIcon} alt='notification-icon' width={30} />
                    </button>
                </div>
            </Navbar>

            <Container className='container'>
                <header className='header'>
                    <div className='profile-picture'>
                        <p className='profile-picture-text'>Profil Fotoğrafı PNG, GIF</p>
                    </div>
                    <div className='header-info-buttons'>
                        <div className='header-info'>
                            <p>Kullanıcı Hakkındaki Bilgier</p>
                            <ul>
                                <li>Puanı ve Rankı</li>
                                <li>Hangi Fakülte</li>
                                <li>Takipçi ve Gönderi sayısı</li>
                                <li>Yeni Rank için Gereksinimler (kişisel)</li>
                            </ul>
                        </div>
                        <div className='header-buttons'>
                            <button className="header-button">Takip Et</button>
                            <button className="header-button">Mesaj Gönder</button>
                            <button className="header-button">Engelle</button>
                            <button className="header-button">Profili Düzenle</button>
                        </div>
                    </div>
                </header>

                <section className='section-1'>
                    <div className='section-buttons'>
                        <button className='section-1-button'>Gönderiler Butonu</button>
                        <button className='section-1-button'>Kaydedilen Butonu</button>
                        <button className='section-1-button'>Yorumlar Butonu</button>
                    </div>
                </section>

                <section className='section-2'>
                    <div className='main-selection-text'>Section-2</div>
                </section>
            </Container>

            <footer className='footer'>
                <p className='footer-text'>Destek E-mail Adresi</p>
                <p className='footer-text'>Destek İletişim Kanalı</p>
                <p className='footer-text'>Sosyal Medya Adresleri</p>
            </footer>

        </div>
    );
}

export default Profile;
