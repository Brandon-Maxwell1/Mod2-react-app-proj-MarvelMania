import React from 'react';

const Footer = () => {
    // Creating some substanance for site. Pages for fans to link to that are related to Marvel
    return (
        <div>
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <div className="container-fluid">
                    <div>
                        <a className="navbar-brand" href="https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Marvel_Cinematic_Universe_logo.png" alt='MCU: Wikipedia' width={100} height={60} /></a>
                    </div>
                    <div>
                        <a className="navbar-brand" href="https://www.ranker.com/list/all-easter-eggs-from-marvel-movies/ranker-comics">
                            <img src="https://images.halloweencostumes.com/blog/images/671/2584-1.jpg" alt='Marvel Universe Live' width={100} height={60} /></a>
                    </div>
                    <div>
                        <a className="navbar-brand" href="https://www.marvel.com/">
                            <img src="https://i.ebayimg.com/images/g/A~wAAOSwheNbLEDy/s-l1600.jpg" alt='Marvel' width={100} height={60} /></a>
                    </div>
                    <div>
                        <a className="navbar-brand" href="https://www.marveluniverselive.com/">
                            <img src="https://www.marveluniverselive.com/themes/custom/marvel_universe_live/assets/images/logo.png" alt='Marvel Universe Live' width={100} height={60} /></a>
                    </div>
                    <div>
                        <a className="navbar-brand" href="https://www.marvelhq.com/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Marvel_HQ_logo.svg/1200px-Marvel_HQ_logo.svg.png" alt='Marvel Universe Live' width={100} height={60} /></a>
                    </div>
                    <div>
                        <a className="navbar-brand" href="https://www.disneyplus.com/">
                            <img src="https://s2.glbimg.com/hoNutqtb86LhWUpcvxKCsGMZAnc=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/V/1/mGGywJQQykpMevJh2qOw/logo-dysneu-plus.jpg" alt='Disney Plus' width={100} height={60} /></a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Footer;




