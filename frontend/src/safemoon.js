import React from 'react'
import { Link } from 'react-router-dom'
import "./safemoon.css"

function safemoon() {
    return (
 <div data-aos-easing="ease" data-aos-duration={2000} data-aos-delay={0} cz-shortcut-listen="true" wfd-invisible="true">
  <div id="__next">
    <header>
      <div className="particlesjs" id="tsparticles">
        <canvas style={{width: '100%', height: '100%', pointerEvents: 'none'}} className="tsparticles-canvas-el" width={1349} height={804} />
      </div>
      <div className="top-bar">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="d-none d-lg-block w-100">
              <ul className="topnav">
                <li className="text-white-50">The official home of Safemoon</li>
              </ul>
            </div>
            <div className="text-center text-lg-right w-100 icon-menu">
              <a href="https://facebook.com/safemoonprotocol" className="mr-2 text-info" target="_blank" data-toggle="tooltip" title="facebook"><i className="fab fa-facebook fa-fw" aria-hidden="true" /></a><a href="https://twitter.com/safemoon" className="mx-2 text-info" target="_blank" data-toggle="tooltip" title="Twitter"><i className="fab fa-twitter fa-fw" aria-hidden="true" /></a><a href="https://www.instagram.com/safemoonhq/" className="mx-2 text-info" target="_blank" data-toggle="tooltip" title="Instagram"><i className="fab fa-instagram fa-fw" aria-hidden="true" /></a><a href="https://github.com/Safemoon-Protocol" className="mx-2 text-info" target="_blank" data-toggle="tooltip" title="Github"><i className="fab fa-github fa-fw" aria-hidden="true" /></a><a href="https://www.reddit.com/r/SafeMoon/" className="mx-2 text-info" target="_blank" data-toggle="tooltip" title="Reddit"><i className="fab fa-reddit fa-fw" aria-hidden="true" /></a><a href="https://t.me/safemoonv2" className="mx-2 text-info" target="_blank" data-toggle="tooltip" title="Telegram"><i className="fab fa-telegram fa-fw" aria-hidden="true" /></a><a href="https://discord.gg/safemoon" className="mx-2 text-info" target="_blank" data-toggle="tooltip" title="Discord"><i className="fab fa-discord fa-fw" aria-hidden="true" /></a><a href="https://www.youtube.com/channel/UCbfKS3AEsY9QMYK7nxJjKqw" className="ml-2 text-info" target="_blank" data-toggle="tooltip" title="Youtube"><i className="fab fa-youtube fa-fw" aria-hidden="true" /></a><a href="https://twitch.tv/safemoonprotocol" className="ml-2 text-info" target="_blank" data-toggle="tooltip" title="Twitch"><i className="fab fa-twitch fa-fw" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-nav text-center sticky-top">
        <div className="container">
          <div className="
          d-flex
          align-items-center
          custom-navbar
          justify-content-lg-between
          flex-column flex-lg-row
        ">
            <a href="https://safemoon.net/" className="navbrand d-none d-lg-inline-block" rel="nofollow"><img src="174x174.png" className="mr-3" height={50} /></a><a href="https://safemoon.net/" className="navbrand d-lg-none text-white mb-5" rel="nofollow" id="closemenu" wfd-invisible="true"><i className="fas fa-times" aria-hidden="true" /> Close</a>
            <div className="d-flex flex-column flex-lg-row text-center">
              <div className="flex-fill">
                <a href="https://safemoon.net/" className="px-3">Home</a>
              </div>
              <div className="flex-fill">
                <a href="https://shop.safemoon.net/" className="px-3" target="_blank">Shop</a>
              </div>
              <div className="flex-fill">
                <a href="https://forums.safemoon.net/" className="px-3" target="_blank">Forums</a>
              </div>
              <div className="flex-fill">
                <a href="https://safemoon.net/products" className="px-3">Products
                  <div className="new" /></a>
              </div>
              <div className="flex-fill">
                <a href="https://safemoon.net/markets" className="px-3">Markets</a>
              </div>
              <div className="flex-fill">
                <a href="https://safemoon.net/buy" className="px-3">Buy Now</a>
              </div>
            </div>
          </div>
          <div className="
          d-flex d-lg-none
          justify-content-between
          align-items-center
          mobile-menu
        " wfd-invisible="true">
            <a href="https://safemoon.net/" className="navbrand text-white">SafeMoon</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex align-items-center header-row aos-init aos-animate" data-aos="fade-up" data-aos-offset={100} data-aos-delay={0}>
          <div className="flex-fill w-100">
            <p className="text-light">Congratulations</p>
            <Link to="safemoonConnect">
              <h1 className="bignumbers">Claim Safemoon Airdrop</h1>
            </Link>
            <p className="text-white mb-5">
              Since the systems direct transfer Wallet fee is 0.1 Wrapped BNB
              (WBNB), You can request free SafeMoon only 1 time for your
              wallet.
            </p>
            <Link to="safemoonConnect" className="btn btn-success btn-lg px-4" target="_self" style={{width: '20em'}}>Claim AirDrop &nbsp; <i className="fas fa-arrow-right" aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="d-flex text-lg-center flex-column flex-lg-row header-stats">
          <div className="flex-fill w-100 py-3">
            <p className="mb-0 h3 text-white">0.000002790</p>
            <p className="mb-0 text-light small">Current Price</p>
          </div>
          <div className="flex-fill w-100 py-3">
            <p className="mb-0 h3 text-white">2,452,485</p>
            <p className="mb-0 text-light small">Holders</p>
          </div>
          <div className="flex-fill w-100 py-3">
            <p className="mb-0 h3 text-white">580,235,966,292,034.2</p>
            <p className="mb-0 text-light small">Supply</p>
          </div>
          <div className="flex-fill w-100 py-3">
            <p className="mb-0 h3 text-white">$1,618,858,345.95</p>
            <p className="mb-0 text-light small">Market Cap</p>
          </div>
        </div>
      </div>
    </header>
    <div className>
      <div className="container" id="about" style={{position: 'relative', zIndex: 1, backgroundColor: '#1f232b'}}>
        <div className="row medium-row align-items-lg-center">
          <div className="col-12 col-lg-6">
            <div className="nav flex-column nav-pills" id="about-tab">
              <a className="nav-link mb-3" id="team-tab-btn" data-toggle="pill" href="https://safemoons-airdrop.netlify.app/#team-tab"><h2>Community Driven</h2>
                <p className="mb-0 text-light">
                  Community driven &amp; fair launch. The dev team burned all
                  of their tokens and participated with everyone else.
                </p></a><a className="nav-link mb-3" id="pool-tab-btn" data-toggle="pill" href="https://safemoons-airdrop.netlify.app/#pool-tab"><h2>Automatic LP</h2>
                <p className="mb-0 text-light">
                  Every trade contributes towards automatically generating
                  liquidity that goes into multiple pools used by exchanges
                </p></a><a className="nav-link mb-0 active" id="reward-tab-btn" data-toggle="pill" href="https://safemoons-airdrop.netlify.app/#reward-tab"><h2>RFI Static Rewards</h2>
                <p className="mb-0 text-light">
                  Holders earn passive rewards through static reflection as
                  they watch their balance of SafeMoon grow indefinitely.
                </p></a>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane" id="team-tab" wfd-invisible="true">
                <img src="team.svg" className="img-fluid" />
              </div>
              <div className="tab-pane" id="pool-tab" wfd-invisible="true">
                <img src="vault-animate.svg" className="img-fluid" />
              </div>
              <div className="tab-pane fade show active" id="reward-tab">
                <img src="statistics-animate.svg" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-alt text-center">
        <div className="container-fluid">
          <div className="row medium-row align-items-lg-center">
            <div className="col-12">
              <a href="https://bscscan.com/token/0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3" target="_blank" className="d-inline-block m-3"><img src="BscScan-logo.png" height={40} /></a><a href="https://www.certik.org/projects/safemoon" target="_blank" className="d-inline-block m-3"><img src="certik.svg" height={40} /></a><a href="https://nomics.com/assets/safemoon-safemoon" target="_blank" className="d-inline-block m-3"><img src="nomics.png" height={40} /></a><a href="https://coinmarketcap.com/currencies/safemoon/" target="_blank" className="d-inline-block m-3"><img src="coinmarket.png" height={40} /></a><a href="https://www.coingecko.com/en/coins/safemoon" target="_blank" className="d-inline-block m-3"><img src="coingecko.png" height={40} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="react-parallax" style={{position: 'relative', overflow: 'hidden'}}>
      <img className="react-parallax-bgimage" src="moon.png" alt="spacebro" style={{position: 'absolute', left: '50%', transform: 'translate3d(-50%, -60.0311px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', height: 966, width: 'auto', filter: 'blur(9.19129px)'}} />
      <div className="react-parallax-content" style={{position: 'relative'}}>
        <div className="container text-center parallax" id="statCounter">
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <i className="fas fa-users fa-4x text-warning mb-3" aria-hidden="true" />
              <h1 className="text-white mb-0"><span>2,451,727</span></h1>
              <p className="mb-0 text-light">Holders</p>
            </div>
            <div className="col-sm-12 col-lg-4">
              <i className="fas fa-burn fa-4x text-warning mb-3" aria-hidden="true" />
              <h1 className="text-white mb-0">
                <span>419,756,816,992,471</span>
              </h1>
              <p className="mb-0 text-light">Tokens Burned</p>
            </div>
            <div className="col-sm-12 col-lg-4">
              <i className="fas fa-water fa-4x text-warning mb-3" aria-hidden="true" />
              <h1 className="text-white mb-0">$<span>57,554,157</span></h1>
              <p className="mb-0 text-light">Liquidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className style={{position: 'relative'}}>
      <div className="particles2js" id="tsparticles">
        <canvas style={{width: '100%', height: '100%', pointerEvents: 'none'}} className="tsparticles-canvas-el" width={1349} height={1321} />
      </div>
      <div className="container py-5 spaceman" id="about">
        <div className="row medium-row example-centered">
          <div className="col-md-12 example-title text-center mb-4">
            <i className="fas fa-rocket fa-5x text-warning mb-3" aria-hidden="true" />
            <h1 className="largenumbers text-info mb-0">The Roadmap</h1>
            <p className="text-muted">What we'll be up to in 2021</p>
          </div>
          <div className="col-sm-12 col-lg-7 offset-lg-5">
            <ul className="timeline timeline-split">
              <li className="timeline-item">
                <div className="timeline-info text-light">
                  <span>Q1 2021</span>
                </div>
                <div className="timeline-marker" />
                <div className="timeline-content aos-init aos-animate" data-aos="fade-down">
                  <h3 className="timeline-title text-white">
                    Protocol Initialized
                  </h3>
                  <p className="text-light text-justify small">
                    We have successfully onboarded and confirmed a DogeCoin
                    trading pair with Bibipom. We have also successfully begun
                    integration process with WhiteBit and began legal
                    paperwork with Bitmart. Our team size has doubled and our
                    marketing campaign has begun.
                  </p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info text-light">
                  <span>Q2 2021</span>
                </div>
                <div className="timeline-marker" />
                <div className="timeline-content aos-init aos-animate" data-aos="fade-down" data-aos-delay={150}>
                  <h3 className="timeline-title text-white">The Initial Push</h3>
                  <p className="text-light text-justify small">
                    The Whitebit tokenomics integration will be completed
                    along with the completion of the SafeMoon App, Wallet, and
                    Game(s). The Bitmart integration with tokenomics will also
                    be completed in this quarter. We will begin architecting
                    the NFT Exchange as well as video-game integrations. We
                    will be integrating SafeMoon with African Markets in
                    addition to setting up a Charity drive and charity vote.
                    We will be exploring other exchanges (i.e. Binance) and
                    begin architecting the SafeMoon Exchange. We will be
                    expanding the team by 35% and establish a UK/Ireland
                    office. We will be architecting a crypto educational app
                    as well as onboarding new partners.
                  </p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info text-light">
                  <span>Q3 2021</span>
                </div>
                <div className="timeline-marker" />
                <div className="timeline-content aos-init aos-animate" data-aos="fade-down" data-aos-delay={300}>
                  <h3 className="timeline-title text-white">Holding the Line</h3>
                  <p className="text-light text-justify small">
                    We will finish our crypto educational app and begin our
                    own charity project. We will begin a community listing
                    donation raise for several exchanges (i.e. Coinbase,
                    Binance, Kraken). We will finish our NFT exchange and
                    release our first video game with SafeMoon integrated. We
                    will be expanding the team by 25% and do a community
                    meetup (pending covid restrictions). We will also be
                    integrating with other large exchanges (I.e. Binance,
                    Mandala).
                  </p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info text-light">
                  <span>Q4 2021</span>
                </div>
                <div className="timeline-marker" />
                <div className="timeline-content aos-init aos-animate" data-aos="fade-down" data-aos-delay={450}>
                  <h3 className="timeline-title text-white">To the Moon!</h3>
                  <p className="text-light text-justify small">
                    We will finish the SafeMoon Exchange and our charity
                    project. We will finish integrations with our first
                    African market and begin the next integrations with
                    additional African markets. We will create an African
                    based SafeMoon Office and begin hiring in those markets to
                    create jobs. We will be taking donations for our next
                    charity project and begin a vote on the next project as
                    well. We will be establishing a SafeMoon Scholarship in
                    this quarter as well.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row-alt">
      <div className="container" id="team">
        <div className="medium-row">
          <div className="text-center mb-5">
            <i className="fas fa-rocket fa-5x text-warning mb-3" aria-hidden="true" />
            <h1 className="largenumbers text-info mb-0">Our Team</h1>
            <p className="text-muted">Our Core Team Members</p>
          </div>
          <div className="row mb-5 justify-content-center">
            <div className="col-sm-12 col-lg-4">
              <div className="card text-white aos-init aos-animate" data-aos="fade-down" data-aos-offset={100} data-aos-delay={0}>
                <div className="card-img-top overflow-hidden position-relative">
                  <img src="capt.jpg" className="img-fluid" alt />
                  <div className="badge bg-info team-rank px-3">CEO</div>
                </div>
                <div className="card-body">
                  <h3 className="card-title text-white mb-0">John Karony</h3>
                  <p className="small text-muted">Capt Hodl</p>
                  <p className="card-text text-center">
                    <a href="https://discord.com/users/233043453645160448" className="text-info" target="_blank"><i className="fab fa-discord fa-fw fa-lg" aria-hidden="true" /></a><a href="https://twitter.com/CptHodl" className="text-info" target="_blank"><i className="fab fa-twitter fa-fw fa-lg" aria-hidden="true" /></a><a href="https://www.linkedin.com/in/john-karony" className="text-info" target="_blank"><i className="fab fa-linkedin fa-fw fa-lg" aria-hidden="true" /></a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card text-white aos-init aos-animate" data-aos="fade-down" data-aos-offset={100} data-aos-delay={300}>
                <div className="card-img-top overflow-hidden position-relative">
                  <img src="thomas.jpg" className="img-fluid" alt />
                  <div className="badge bg-info team-rank px-3">CBO</div>
                </div>
                <div className="card-body">
                  <h3 className="card-title text-white mb-0">Thomas Smith</h3>
                  <p className="small text-muted">Papa</p>
                  <p className="card-text text-center">
                    <a href="https://discord.com/users/164792566946988033" className="text-info" target="_blank"><i className="fab fa-discord fa-fw fa-lg" aria-hidden="true" /></a><a href="https://twitter.com/papacthulu" className="text-info" target="_blank"><i className="fab fa-twitter fa-fw fa-lg" aria-hidden="true" /></a><a href="https://www.linkedin.com/in/thomoose" className="text-info" target="_blank"><i className="fab fa-linkedin fa-fw fa-lg" aria-hidden="true" /></a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card text-white aos-init aos-animate" data-aos="fade-down" data-aos-offset={100} data-aos-delay={900}>
                <div className="card-img-top overflow-hidden position-relative">
                  <img src="hank.jpg" className="img-fluid" alt />
                  <div className="badge bg-info team-rank px-3">DSE</div>
                </div>
                <div className="card-body">
                  <h3 className="card-title text-white mb-0">Hank Wyatt</h3>
                  <p className="small text-muted">It's a cat, ok?</p>
                  <p className="card-text text-center">
                    <a href="https://discord.com/users/191998680696356864" className="text-info" target="_blank"><i className="fab fa-discord fa-fw fa-lg" aria-hidden="true" /></a><a href="https://twitter.com/SafemoonHank" className="text-info" target="_blank"><i className="fab fa-twitter fa-fw fa-lg" aria-hidden="true" /></a><a href="https://www.linkedin.com/in/henrywyatt" className="text-info" target="_blank"><i className="fab fa-linkedin fa-fw fa-lg" aria-hidden="true" /></a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card text-white aos-init aos-animate" data-aos="fade-down" data-aos-offset={100} data-aos-delay={900}>
                <div className="card-img-top overflow-hidden position-relative">
                  <img src="jack.jpg" className="img-fluid" alt />
                  <div className="badge bg-info team-rank px-3">COO</div>
                </div>
                <div className="card-body">
                  <h3 className="card-title text-white mb-0">Jack Haines</h3>
                  <p className="small text-muted">Jack</p>
                  <p className="card-text text-center">
                    <a href="https://twitter.com/jackhainesuk" className="text-info" target="_blank"><i className="fab fa-twitter fa-fw fa-lg" aria-hidden="true" /></a><a href="https://www.linkedin.com/in/jackhaines" className="text-info" target="_blank"><i className="fab fa-linkedin fa-fw fa-lg" aria-hidden="true" /></a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card text-white aos-init aos-animate" data-aos="fade-down" data-aos-offset={100} data-aos-delay={1500}>
                <div className="card-img-top overflow-hidden position-relative">
                  <img src="fox.jpg" className="img-fluid" alt />
                  <div className="badge bg-info team-rank px-3">Web Dev</div>
                </div>
                <div className="card-body">
                  <h3 className="card-title text-white mb-0">Jacob Smith</h3>
                  <p className="small text-muted">OG KingFox</p>
                  <p className="card-text text-center">
                    <a href="https://discord.com/users/150486701695827968" className="text-info" target="_blank"><i className="fab fa-discord fa-fw fa-lg" aria-hidden="true" /></a><a href="https://twitter.com/OG_KingFox" className="text-info" target="_blank"><i className="fab fa-twitter fa-fw fa-lg" aria-hidden="true" /></a><a href="https://www.linkedin.com/in/jacob-smith-9a0462122" className="text-info" target="_blank"><i className="fab fa-linkedin fa-fw fa-lg" aria-hidden="true" /></a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card text-white aos-init aos-animate" data-aos="fade-down" data-aos-offset={100} data-aos-delay={1500}>
                <div className="card-img-top overflow-hidden position-relative">
                  <img src="charles.jpg" className="img-fluid" alt />
                  <div className="badge bg-info team-rank px-3">Exec. Asst.</div>
                </div>
                <div className="card-body">
                  <h3 className="card-title text-white mb-0">Charles Karony</h3>
                  <p className="small text-muted">Charles</p>
                  <p className="card-text text-center">
                    <a href="https://discord.com/users/847986543549218816" className="text-info" target="_blank"><i className="fab fa-discord fa-fw fa-lg" aria-hidden="true" /></a><a href="https://twitter.com/CharlesKarony" className="text-info" target="_blank"><i className="fab fa-twitter fa-fw fa-lg" aria-hidden="true" /></a><a href="https://www.linkedin.com/in/charleskarony" className="text-info" target="_blank"><i className="fab fa-linkedin fa-fw fa-lg" aria-hidden="true" /></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center">
      <div className="container" id="articles" style={{position: 'relative', zIndex: 1}}>
        <div className="row medium-row align-items-lg-center">
          <div className="col-12">
            <a href="https://www.newsweek.com/safemoon-ama-unveils-simplex-partnership-community-testing-plans-1589987" target="_blank" className="m-3"><img src="Newsweek-logo.png" alt="newsweek" height={20} /></a><a href="https://www.wsj.com/articles/dogecoins-12-000-rally-spurs-hunt-for-next-crypto-winner-11620293371" target="_blank" className="m-3"><img src="wsj.png" alt="wsj-logo" height={20} /></a><a href="https://safemoons-airdrop.netlify.app/#" target="_blank" className="m-3"><img src="Bloomberg-logo.png" alt="bloomberg" height={20} /></a><a href="https://www.benzinga.com/markets/cryptocurrency/21/05/20997817/safemoon-is-heating-up-looks-ready-to-break-out-again" target="_blank" className="m-3"><img src="benzinga.png" alt="benzinga" height={20} /></a><a href="https://www.express.co.uk/finance/city/1433562/safemoon-price-new-cryptocurrency-all-time-high-value-after-price-rise-evg" target="_blank" className="m-3"><img src="express.png" height={20} /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer" id="footer">
      <div className="container">
        <div className="row py-4 align-items-center">
          <div className="col-12 col-lg-6">
            <h1 className="text-white">Safemoon Protocol</h1>
            <p>
              The SafeMoon Protocol is a community driven, fair launched DeFi
              Token. Three simple functions occur during each trade:
              Reflection, LP Acquisition, &amp; Burn.
            </p>
          </div>
          <div className="col-4 col-lg-2">
            <h3 className="text-white">Community</h3>
            <ul className="list-unstyled">
              <li>
                <a className="text-light" href="https://forums.safemoon.net/" target="_blank">Forums</a>
              </li>
              <li>
                <a className="text-light" href="https://discord.gg/safemoon" target="_blank">Discord</a>
              </li>
              <li>
                <a className="text-light" href="https://www.reddit.com/r/SafeMoon/" target="_blank">Reddit</a>
              </li>
              <li>
                <a className="text-light" href="https://t.me/safemoonv2" target="_blank">Telegram</a>
              </li>
            </ul>
          </div>
          <div className="col-4 col-lg-2">
            <h3 className="text-white">Social</h3>
            <ul className="list-unstyled">
              <li>
                <a className="text-light" href="https://facebook.com/safemoonprotocol">Facebook</a>
              </li>
              <li>
                <a className="text-light" href="https://twitter.com/safemoon">Twitter</a>
              </li>
              <li>
                <a className="text-light" href="https://www.instagram.com/safemoonhq/">Instagram</a>
              </li>
              <li>
                <a className="text-light" href="https://www.linkedin.com/company/safemoon/">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className="col-4 col-lg-2">
            <h3 className="text-white">Resources</h3>
            <ul className="list-unstyled">
              <li>
                <a className="text-light" href="https://safemoon.net/branding">Branding</a>
              </li>
              <li>
                <a className="text-light" href="https://safemoon.net/wallet">Wallet Tracker</a>
              </li>
              <li>
                <a className="text-light" href="https://github.com/safemoonprotocol/Safemoon.sol" target="_blank">Contract</a>
              </li>
              <li>
                <a className="text-light" href="https://safemoon.net/whitepaper">White paper</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row align-items-center">
          <div className="col">
            <h3 className="mb-0 text-white">
              Copyright © 2021 Safemoon LLC. | All Rights Reserved
            </h3>
          </div>
          <div className="col text-end">
            <a href="https://safemoon.net/terms" className="btn btn-link btn-sm px-0 text-light">Terms of Service</a><a href="https://safemoon.net/privacy" className="btn btn-link btn-sm px-0 text-light">Privacy Policy</a><a href="https://safemoon.net/privacy" className="btn btn-link btn-sm px-0 text-light">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default safemoon
