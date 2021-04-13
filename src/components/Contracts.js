import React, { Component } from 'react';
import { PageHeader, Tag, Button } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, TeamOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AddContractDrawer from './drawer/AddContractDrawer';
import EditContractEmployeesModal from './modal/EditContractEmployeesModal'
import TableWithSearch from './utils/TableWithSearch'

class Contracts extends Component {

    state = {
        showDrawer: false,
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
                title: 'Contrato Glow',
                dataIndex: 'glow_contract',
                key: 'glow_contract',
                search: true,
            },
            {
                title: 'Descripcion',
                dataIndex: 'description',
                key: 'description',
                search: false,
            },
            {
                title: 'Proyectos',
                dataIndex: 'projects',
                key: 'projects',
                search: false,
                render: projects => (
                    <span>
                        {projects.map(project => (
                            <Tag color="blue" key={projects}>
                                {project}
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
                    title="Contratos"
                    style={{ backgroundColor: '#f0f2f5' }}
                    extra={[
                        <Button key="1" type="primary" shape="circle" icon={<DeleteOutlined />} size="large" />,
                        <Link to="/contracts/projects" >
                            <Button key="2" type="primary" shape="circle" icon={<EditOutlined />} size="large" />
                        </Link>,
                        <Button key="3" type="primary" shape="circle" icon={<TeamOutlined />} size="large" onClick={this.showModal} />,
                        <Button key="4" type="primary" shape="circle" icon={<PlusOutlined />} size="large" onClick={this.showDrawer} />
                    ]}
                />
                <AddContractDrawer visible={this.state.showDrawer} onCloseDrawer={this.onCloseDrawer} />
                <EditContractEmployeesModal visible={this.state.showModal} onOk={this.handleModalOk} onCancel={this.handleModalCancel} />
                <TableWithSearch dataSource={data} columns={columns} rowType='radio' />
            </div>
        )
    }
}

const projects = [];
for (let i = 0; i < 5; i++) {
    projects.push("Proyecto " + i);
}

const employees = [];
for (let i = 0; i < 5; i++) {
    employees.push("Empleado " + i);
}

const data = [];
for (let i = 0; i < 15; i++) {
    data.push({
        key: i,
        glow_contract: "Contrato " + i,
        description: "Descripcion contrato " + i,
        projects: projects,
        employees: employees
    });
}



export default Contracts;
