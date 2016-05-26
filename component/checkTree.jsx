import React from 'react';
import ReactDOM from 'react-dom';

const BuyTree = () => (
    	<button >ซื้อต้นไม้ </button>
    )
const HaveTree = () => (
    	<button >มีต้นไม้แล้ว </button>
    )
const Skip = () => (
    	<button >ข้าม </button>
    )
const CheckTreeContainer = () => (
	<div className="checkTree-containner">
    	<div className="name"> มีต้นไม้หรือไม่?	</div>
        <BuyTree />	
        <HaveTree />
        <Skip />
	</div>
);
export {CheckTreeContainer}