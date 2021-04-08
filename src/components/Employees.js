import React, { Component } from 'react'
import { PageHeader, Table, Tag, Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import AddEmployeeDrawer from './drawer/AddEmployeeDrawer'

const { Column } = Table;

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



    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    render() {
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
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
                <Table dataSource={data} rowSelection={rowSelection} >
                    <Column title="Empleados" dataIndex="employee" key="employee" />
                    <Column title="Descripcion" dataIndex="description" key="description" />
                    <Column
                        title="Contratos"
                        dataIndex="contracts"
                        key="contracts"
                        render={contracts => (
                            <>
                                {contracts.map(contract => (
                                    <Tag color="blue" key={contracts}>
                                        {contract}
                                    </Tag>
                                ))}
                            </>
                        )}
                    />
                </Table>
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
