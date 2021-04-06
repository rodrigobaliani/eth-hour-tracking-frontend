import React from 'react';
import { PageHeader } from 'antd';


const Projects = () => {
    return (
        <div>
            <PageHeader ghost={false} onBack={() => window.history.back()} title="Proyectos" style={{ backgroundColor: '#f0f2f5' }} />
        </div>
    )

}

export default Projects;
