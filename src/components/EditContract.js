import React, { Component } from 'react'
import { PageHeader, Table, Tag, Button } from 'antd';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import AddProjectDrawer from './AddProjectDrawer';
import { Link } from 'react-router-dom'

const { Column } = Table;

export class EditContract extends Component {

    state = {
        showDrawer: false,
        selectedRowKeys: [],
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
                    title="Contrato ejemplo"
                    style={{ backgroundColor: '#f0f2f5' }}
                    extra={[
                        <Link to="/contracts/projects/tasks">
                            <Button key="1" type="primary" shape="circle" icon={<EditOutlined />} size="large" />
                        </Link>,
                        <Button key="2" type="primary" shape="circle" icon={<PlusOutlined />} size="large" onClick={this.showDrawer} />
                    ]}
                />
                <AddProjectDrawer visible={this.state.showDrawer} onCloseDrawer={this.onCloseDrawer} />
                <Table dataSource={data} rowSelection={rowSelection} >
                    <Column title="Proyecto" dataIndex="project" key="project" />
                    <Column title="Descripcion" dataIndex="description" key="description" />
                    <Column
                        title="Tareas"
                        dataIndex="tasks"
                        key="tasks"
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

const tasks = [];
for (let i = 0; i < 5; i++) {
    tasks.push("Tarea " + i);
}


const data = [];
for (let i = 0; i < 15; i++) {
    data.push({
        key: i,
        project: "Proyecto " + i,
        description: "Descripcion proyecto " + i,
        tasks: tasks,
    });
}


export default EditContract
