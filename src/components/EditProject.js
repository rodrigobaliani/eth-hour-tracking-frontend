import React, { Component } from 'react'
import { PageHeader, Table, Tag, Button } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import AddTaskDrawer from './drawer/AddTaskDrawer';
import EditTaskEmployeesModal from './modal/EditTaskEmployeesModal'

const { Column } = Table;

export class EditProject extends Component {

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

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
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
                    title="Proyecto ejemplo"
                    style={{ backgroundColor: '#f0f2f5' }}
                    extra={[
                        <Button key="1" type="primary" shape="circle" icon={<DeleteOutlined />} size="large" />,
                        <Button key="2" type="primary" shape="circle" icon={<EditOutlined />} size="large" onClick={this.showModal} />,
                        <Button key="3" type="primary" shape="circle" icon={<PlusOutlined />} size="large" onClick={this.showDrawer} />
                    ]}
                />
                <AddTaskDrawer visible={this.state.showDrawer} onCloseDrawer={this.onCloseDrawer} />
                <EditTaskEmployeesModal visible={this.state.showModal} onOk={this.handleModalOk} onCancel={this.handleModalCancel} />
                <Table dataSource={data} rowSelection={rowSelection} >
                    <Column title="Tarea" dataIndex="task" key="task" />
                    <Column title="Descripcion" dataIndex="description" key="description" />
                    <Column
                        title="Empleados"
                        dataIndex="employees"
                        key="employees"
                        render={tasks => (
                            <>
                                {tasks.map(task => (
                                    <Tag color="blue" key={tasks}>
                                        {task}
                                    </Tag>
                                ))}
                            </>
                        )} />
                </Table>
            </div>
        )
    }


}

const employees = [];
for (let i = 0; i < 5; i++) {
    employees.push("Empleado " + i);
}


const data = [];
for (let i = 0; i < 15; i++) {
    data.push({
        key: i,
        task: "Tarea " + i,
        description: "Descripcion tarea " + i,
        employees: employees,
    });
}


export default EditProject
