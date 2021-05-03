import React from 'react';
import '../App.css'
import { Row, Col } from 'react-bootstrap';
import DungeonDive from './DungeonDive/DungeonDive'

const Projects = () => {
    return (
        <div className='Projects' id='projects'>
            <DungeonDive />
        </div>
    )
};

export default Projects;