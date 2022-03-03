import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../Utilities/Container';
import Gird from '../Utilities/Gird';
import Description from '../Utilities/Description';
import "./HomeView.css"
const Homeview = () => {
    const text = "Let's face it ; If you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!";

    return (
        <Container className="home__view">
            <Gird className="home__view--grid">
               <section>
               <h5>SO YOU WANT TO GO TO</h5>
                <h1>Space</h1>
                <Description 
                text={text} 
                className="styleHomeDes"
                />
               </section>
               <div className='home__view__link--container'>
                <Link to="/destination" className = "home__view__link">
                    Explore
                </Link>
               </div>
            </Gird>
        </Container>
    );
}

export default Homeview;
