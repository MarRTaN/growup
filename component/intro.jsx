import React from 'react'
import { Slide } from './_slide'
import {Link} from 'react-router'
const Intro = () => (
  <img src='images/market/tree-icon-3.png' />
)
const Button = () => (
  <div >
  <button className='next'>
      next
  </button>
  <button className='skip'>
      <Link to='/newuser'>skip</Link>
  </button>
  </div>
)
const IntroSlide = Slide(Intro)
const IntroContainer = () => (
  <div>
    <IntroSlide />
    <Button />
  </div>
)
export { IntroContainer }
