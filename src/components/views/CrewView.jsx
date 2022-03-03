import React from 'react';
import { useState } from 'react';
import {dataCrewTitle , dataCrewContent,dataImgCrew,btns} from "../../components/data/DataCrew";
import Container from '../Utilities/Container';
import Gird from '../Utilities/Gird';
import Pageimg from '../Utilities/pageImg';
import Title from '../Utilities/Title';
import Description from '../Utilities/Description';
import "./CrewView.css";

const Crewview = () => {
    const [event, setEvent] = useState(0);
   
    const handleEvent = (id) => {
        setEvent(id);
       
    }
    return (
        <Container className="crewView">
            <Gird>
                <h2 className="titleCrew">{dataCrewTitle}</h2>   
            <Title className="dataCrewPosititon" data={dataCrewContent[event].position}/>
            <h1 className='crewNumber' >{dataCrewContent[event].name}</h1>
            <Description 
            text={dataCrewContent[event].para} 
            className="styleCrewDes"
            />
            <Pageimg 
                data={dataImgCrew[event].img} 
                className="imgCrew"
                />
                <div className='btnsStyle'>
                    <ul>
                        {btns.map((btn) => { 
                            return (
                                <button key={btn.id}
                                    onClick={() => handleEvent(btn.id)}
                                    className={
                                        event === btn.id 
                                        ? "activeLinkBtn"
                                        : "unActiveBtn"
                                    }
                                >
                                    
                                </button>
                            )
                        })}
                    </ul>
                </div>
            </Gird>
        </Container>
    );
}

export default Crewview;
