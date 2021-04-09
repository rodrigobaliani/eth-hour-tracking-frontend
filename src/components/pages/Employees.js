import React from 'react';
import { PageHeader } from 'antd';

const Employees = () => {
    return (
        <div>
            <PageHeader ghost={false} onBack={() => window.history.back()} title="Empleados" style={{ backgroundColor: '#f0f2f5' }} />
        </div>
    )
}

export default Employees;
