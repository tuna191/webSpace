import React from 'react';
import { useState } from 'react';
import Container from '../Utilities/Container';
import Gird from '../Utilities/Gird';
import Pageimg from '../Utilities/pageImg';
import Title from '../Utilities/Title';
import Description from '../Utilities/Description';
import "./TechnologyView.css";

import {imgTech,dataTech,btnTech,titleTech} from "../../components/data/DataTech";
const Technologyview = () => {
    const [event, setEvent] = useState(0);

    const handleEvent = (id) => {
        setEvent(id);

    }
    return (
        <Container className="techView">
            <Gird>
                <Pageimg
                    data={imgTech[event].img}
                    className="imgTech"
                />
                <div className='btnsStyle'>
                    <ul>
                        {btnTech.map((btn) => {
                            return (
                                <button key={btn.id}
                                    onClick={() => handleEvent(btn.id)}
                                    className={
                                        event === btn.id
                                            ? "activeLinkBtn--Tech"
                                            : "unActiveBtn--Tech"
                                    }
                                >
                                {btn.num}
                                </button>
                            )
                        })}
                    </ul>
                </div>
                <h2 className="titleTech">{titleTech}</h2>
                <Title className="dataTechName" data={dataTech[event].name} />

                <Description
                    text={dataTech[event].para}
                    className="styleTechDes"
                />


            </Gird>
        </Container>
    );
}

export default Technologyview;
