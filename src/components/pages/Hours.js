import React from 'react';
import { PageHeader } from 'antd';


const Hours = () => {
    return (
        <div>
            <PageHeader ghost={false} onBack={() => window.history.back()} title="Horas" style={{ backgroundColor: '#f0f2f5' }} />
        </div>
    )
}

export default Hours;
