import React from 'react'
import Link from 'next/link'
import css, { insertRule } from 'next/css'

export default () => (
  <div className={wrapper_style}>
    <div className={header_style}>
      <Link href="/"><a className={link_style}>nukr.tw</a></Link>
    </div>
    <div className={main_style}>
      <div className={name_style}>Wei Luo</div>
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
  height: '100%',
  width: '100%'
})

const header_style = css({
  padding: '20px',
  fontSize: '0.7em'
})

const link_style = css({
  textDecoration: 'none'
})

const main_style = css({
  fontSize: '1.1em',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex'
})

const name_style = css({
})
