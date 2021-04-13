import React, { Component } from 'react'
import { PageHeader, Tag, Button, Tabs } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import AddProjectDrawer from './drawer/AddProjectDrawer';
import EditEmployeeContractDedication from './modal/EditEmployeeContractDedication'
import TableWithSearch from './utils/TableWithSearch'

const { TabPane } = Tabs;

export class EditContract extends Component {

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

        const columnsProjects = [
            {
                title: 'Proyecto',
                dataIndex: 'project',
                key: 'project',
                search: true,
            },
            {
                title: 'Descripcion',
                dataIndex: 'description',
                key: 'description',
                search: false,

            },
            {
                title: 'Tareas',
                dataIndex: 'tasks',
                key: 'tasks',
                search: false,
                render: tasks => (
                    <span>
                        {tasks.map(task => (
                            <Tag color="blue" key={tasks}>
                                {task}
                            </Tag>
                        ))}
                    </span>
                ),
            },
        ]

        const columnsEmployees = [
            {
                title: 'Empleado',
                dataIndex: 'employee',
                key: 'employee',
                search: true,
            },
            {
                title: 'Descripcion',
                dataIndex: 'description',
                key: 'description',
                search: false,
            },
            {
                title: 'Disponiblidad',
                dataIndex: 'availability',
                key: 'availability',
                search: false,
            },
        ]
        return (
            <div>
                <AddProjectDrawer visible={this.state.showDrawer} onCloseDrawer={this.onCloseDrawer} />
                <EditEmployeeContractDedication visible={this.state.showModal} onOk={this.handleModalOk} onCancel={this.handleModalCancel} />
                <Tabs defaultActiveKey="1" onChange={this.onChangeTab}>
                    <TabPane tab="Proyectos" key="projects">
                        <PageHeader
                            ghost={false}
                            onBack={() => window.history.back()}
                            title="Contrato ejemplo"
                            style={{ backgroundColor: '#f0f2f5' }}
                            extra={[
                                <Button key="1" type="primary" shape="circle" icon={<DeleteOutlined />} size="large" />,
                                <Link to="/contracts/projects/tasks">
                                    <Button key="2" type="primary" shape="circle" icon={<EditOutlined />} size="large" />
                                </Link>,
                                <Button key="3" type="primary" shape="circle" icon={<PlusOutlined />} size="large" onClick={this.showDrawer} />
                            ]}
                        />
                        <TableWithSearch dataSource={dataProjects} columns={columnsProjects} rowType='radio' />

                    </TabPane>
                    <TabPane tab="Empleados" key="employees">
                        <PageHeader
                            ghost={false}
                            onBack={() => window.history.back()}
                            title="Contrato ejemplo"
                            style={{ backgroundColor: '#f0f2f5' }}
                            extra={[
                                <Button key="4" type="primary" shape="circle" icon={<EditOutlined />} size="large" onClick={this.showModal} />
                            ]}
                        />
                        <TableWithSearch dataSource={dataEmployees} columns={columnsEmployees} rowType='radio' />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

const tasks = [];
for (let i = 0; i < 5; i++) {
    tasks.push("Tarea " + i);
}


const dataProjects = [];
for (let i = 0; i < 15; i++) {
    dataProjects.push({
        key: i,
        project: "Proyecto " + i,
        description: "Descripcion proyecto " + i,
        tasks: tasks,
    });
}

const dataEmployees = [];
for (let i = 0; i < 15; i++) {
    dataEmployees.push({
        key: i,
        employee: "Empleado " + i,
        description: "Descripcion empleado " + i,
        availability: "100%"
    });
}


export default EditContract
