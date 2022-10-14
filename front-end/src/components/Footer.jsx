import React from 'react';
import logo from '../images/download.png'
import face from '../images/facebook.e2b4869a.svg'
import insta from '../images/instagram.3bf236ff.svg'
import tiktok from '../images/tiktok.acb607d0.svg'
import twitter from '../images/twitter.4834eaa7.svg'
export default function Footer() {
  
  return (
    <div >
      <footer>
        <img alt="logo allugator" src={ logo } />
        <div>
          <p>R. Maranhão, 330, 9º andar</p>
          <p>Santa Efigênia</p>
          <p>Belo Horizonte - MG</p>
          <p>30320-130</p>
        </div>
        <div>
          <p>Contato:</p>
          <p>lite@allugator.com</p>
        </div>
        <div>
        <a href='https://www.instagram.com/allugatoroficial/'>
          <img alt="instagram allugator" src={ insta } />
        </a>
        <a href='https://www.tiktok.com/@allugator'>
          <img alt="tiktok allugator" src={ tiktok } />
        </a>
        <a href='https://twitter.com/allugatorofc'>
          <img alt="twitter allugator" src={ twitter } />
        </a>
        <a href='https://www.facebook.com/allugatordotcom'>
          <img alt="facebook allugator" src={ face } />
        </a>
        </div>
      </footer>
    </div>
  )
}