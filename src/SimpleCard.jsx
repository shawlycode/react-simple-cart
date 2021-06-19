
import Title from './Title';
import Description from './Description';


import React, { Component } from 'react';
class SimpleCard extends Component {
    render() {
        return (
            <div className='Card-body'>
                <div className='card-Content'>
                    <Title title='Trioka Coffee' />
                    <Description description='Premium Gourmet coffee infused with herbs:Garnoderma, Ginseng and Tonkat ali ' />
                </div>
                <img imgurl ={img}/>

            </div>
        );
    }
}

export default SimpleCard;
