import React from 'react'
import Link from 'next/link'
import css, { insertRule } from 'next/css'

export default () => (
  <div className={wrapper_style}>
    <div className={header_style}><Link href="//nukr.tw"><a className={header_link_style}>nukr.tw</a></Link></div>
    <div className={center_box_style}>
      <div className={name_style}>
        Wei Luo
      </div>
      <div className={contact_wrapper_style}>
        <div className={contact_style}>
          <Link href="//twitter.com/nukrs"><a className={contact_link_style}>@nukr</a></Link>
        </div>
        <div className={contact_style}>
          <Link href="//nukr.github.io"><a className={contact_link_style}>blog</a></Link>
        </div>
        <div className={contact_style}>
          <Link href="nukrs.w@gmail.com"><a className={contact_link_style}>email</a></Link>
        </div>
      </div>
    </div>
  </div>
)

insertRule(`
  @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Press Start 2P', cursive;
  }
`)

const wrapper_style = css({
  height: '100vh',
  width: '100vw',
  position: 'relative'
})

const center_box_style = css({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
})

const name_style = css({
  textAlign: 'center'
})

const contact_wrapper_style = css({
  display: 'flex',
  justifyContent: 'space-around',
  fontSize: '12px'
})

const contact_style = css({
  padding: '10px'
})

const contact_link_style = css({
  // color: '#131B99',
  color: '#60E441',
  textDecoration: 'none'
})

const header_style = css({
  padding: '17px',
  fontSize: '0.6em'
})

const header_link_style = css({
  textDecoration: 'none'
})
