
import Title from './Title';
import Description from './Description';
import Image from './Image';
import img from './images/TRIO.png';
import './index.css';


import React, { Component } from 'react';
class SimpleCard extends Component {
    render() {
        return (
            <div className='Card-body'>
                <div className='card-Content'>
                    <Title title='Trioka Coffee' />
                    <Description description='Premium Gourmet coffee infused with herbs:Garnoderma, Ginseng ' />
                </div>
                <Image imgUrl={img}/>

            </div>
        );
    }
}

export default SimpleCard;
