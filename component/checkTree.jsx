import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
const BuyTree = () => (
  <button>
    <Link to= "/market"> ซื้อต้นไม้
    </Link>
  </button>
)
const HaveTree = () => (
  <button>
    <Link to= "/scanqr">มีต้นไม้แล้ว
      </Link>
  </button>
)
const Skip = () => (
  <button>
      <Link to="/home">ข้าม
        </Link>
  </button>
)
const CheckTreeContainer = () => (
  <div className="checkTree-containner">
    <div className="name">
      มีต้นไม้หรือไม่?
    </div>
    <BuyTree />
    <HaveTree />
    <Skip />
  </div>
)
export { CheckTreeContainer }
