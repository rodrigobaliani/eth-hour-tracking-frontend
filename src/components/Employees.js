import React, { Component } from 'react'
import { PageHeader, Tag, Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import AddEmployeeDrawer from './drawer/AddEmployeeDrawer'
import TableWithSearch from './utils/TableWithSearch'

export class Employees extends Component {

    state = {
        showDrawer: false,
        selectedRowKeys: [],
        showModal: false,
    };

    showDrawer = () => {
        this.setState({
            showDrawer: true,
        });
    };

    onCloseDrawer = () => {
        this.setState({
            showDrawer: false,
        });
    };

    showModal = () => {
        this.setState({
            showModal: true,
        });
    };

    handleModalOk = () => {
        this.setState({
            showModal: false,
        });
    };

    handleModalCancel = () => {
        this.setState({
            showModal: false,
        });
    };

    render() {

        const columns = [
            {
                title: 'Empleado',
                dataIndex: 'employee',
                key: 'employee',
                search: 'true',
            },
            {
                title: 'Descripcion',
                dataIndex: 'description',
                key: 'description',
                search: 'false',
            },
            {
                title: 'Contratos',
                dataIndex: 'contracts',
                key: 'contracts',
                search: 'false',
                render: contracts => (
                    <span>
                        {contracts.map(contract => (
                            <Tag color="blue" key={contract}>
                                {contract}
                            </Tag>
                        ))}
                    </span>
                ),
            },
        ]

        return (
            <div>
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="Empleado"
                    style={{ backgroundColor: '#f0f2f5' }}
                    extra={[
                        <Button key="1" type="primary" shape="circle" icon={<DeleteOutlined />} size="large" />,
                        <Button key="3" type="primary" shape="circle" icon={<PlusOutlined />} size="large" onClick={this.showDrawer} />
                    ]}
                />
                <AddEmployeeDrawer visible={this.state.showDrawer} onCloseDrawer={this.onCloseDrawer} />
                <TableWithSearch dataSource={data} columns={columns} rowType='radio' />
            </div>
        )
    }
}

const contracts = [];
for (let i = 0; i < 5; i++) {
    contracts.push("Contrato " + i);
}

const data = [];
for (let i = 0; i < 15; i++) {
    data.push({
        key: i,
        employee: "Empleado " + i,
        description: "Descripcion empleado " + i,
        contracts: contracts
    });
}

export default Employees
