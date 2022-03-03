import React from 'react';
import { useState } from 'react';
import "./Destination.css";
import { dataDestination,titleDestination, dataImgDestination, dataTitleDestination } from '../data/DataDestination';
import Container from '../Utilities/Container';
import Gird from '../Utilities/Gird';
import Pageimg from '../Utilities/pageImg';
import Title from '../Utilities/Title';
import Description from '../Utilities/Description';

import "./Destination.css"
const Destinationview = () => {
    const [event, setEvent] = useState(0);
    // const [active ,setActive] = useState(0);
    const handleEvent = (id) => {
        setEvent(id);
       // setActive(id)
    }
    return (
        <Container className="destinationView">
            <Gird>
                <h2 className="titleDes">{titleDestination}</h2>
                <Pageimg 
                data={dataImgDestination[event].img} 
                className="imgDestination"
                />
                <div className='titledestination'>
                    <ul>
                        {dataTitleDestination.map((title) => { 
                            return (
                                <li key={title.id}
                                    onClick={() => handleEvent(title.id)}
                                    className={
                                        event === title.id 
                                      ? "activeLinkTitle"
                                        : "unActiveLink"
                                    }
                                >
                                    {title.title}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            <Title className="titleDestination" data={dataTitleDestination[event].title}/>
            <Description 
            text={dataDestination[event].para}
            className="styleParaDes"
            />
            <hr className="hr"/>
            <div className='infoDestination'>
                <div className='infoDestination__distance'>
                        <h2>{dataDestination[event].titleDistance}</h2>
                        <h1>{dataDestination[event].distance}</h1>

                </div>
                <div className='infoDestination__time'>
                <h2>{dataDestination[event].titleTravelTime}</h2>
                        <h1>{dataDestination[event].travelTime}</h1>
                </div>
            </div>
            </Gird>
        </Container>
    );
}

export default Destinationview;
