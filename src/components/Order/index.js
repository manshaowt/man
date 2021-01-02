import React,{Component,Fragment} from 'react'
import Table from '../Table'
import './index.css'
export default class Order extends Component {
    render(){
        return (
            <Fragment>
              <h1>订单列表</h1>
              <Table/>
            </Fragment>
        )
    }
}