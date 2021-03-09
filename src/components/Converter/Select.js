import React, { Component } from 'react';



class Conversion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: [],
            colours: {}
        };
    }

    componentDidMount() {
        this.setState({
            coins: [
                {id: 'BTC'},
                {id: 'BNB'},
                {id: 'ETH'}
            ]
        });
    }

    render () {
        const { coins } = this.state;
        const coinsList = coins.length > 0
            && coins.map((item,i) => {
                return (
                    <option style={{border:'none',backgroundImage:'url(./img/BTC.png)'}} key={i} value={item.id}>{item.id}</option>
                )
            }, this);

        return (
            <div>
                <select style={{position:'absolute',border:'none',borderLeft:'1px #9c9c9c solid',padding:' 10px',left:0,width:'100%'}}>
                    {coinsList}
                </select>
            </div>
        );
    }
}

export default Conversion;
