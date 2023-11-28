import React from 'react'
import { useDispatch,useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
// import {depositMoney,withdrawMoney} from './state/action-creators/index'
import { actionCreators } from './state';
export default function Soap() {
  const balance = useSelector(state=>state.amount)
  const dispatch = useDispatch()
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div className='container'>
     <h1>Deposit/Withdraw Money</h1>
     <div className="d-flex container">
     <button className="btn btn-primary mx-3" onClick={()=>{withdrawMoney(100)}}>-</button>
             <h2>{balance} </h2>
             <button className="btn btn-primary mx-3" onClick={()=>{depositMoney(100)}}>+</button>
     </div>
             

    </div>
  )
}
