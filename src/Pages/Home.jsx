import React from 'react';
import Axios from 'axios';

export default class Home extends React.Component{

    state = {
        dataAwal: null
    }

    // componentDidMount(){
    //     this.getDataProducts
    // }

    getDataProducts = () => {
        Axios.get('http://localhost:6000/products')
        .then((res) => {
            this.setState({dataAwal: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        return(
            <>
            {/* JUMBOTRON */}
            <div style={{height: '500px', border: 'solid black 1px'}}>
                Jumbotron
            </div>

            </>
        )
    }
}