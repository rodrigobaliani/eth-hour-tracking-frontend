import React, { Component } from 'react'
import { PageHeader, Table, Tag, Button, Tabs, Input, Space } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Link } from 'react-router-dom'
import AddProjectDrawer from './drawer/AddProjectDrawer';
import EditEmployeeContractDedication from './modal/EditEmployeeContractDedication'

const { Column } = Table;
const { TabPane } = Tabs;

export class EditContract extends Component {

    state = {
        showDrawer: false,
        selectedRowKeysProjects: [],
        selectedRowKeysEmployees: [],
        showModal: false,
        searchText: '',
        searchedColumn: '',
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

    onProjectSelectChange = selectedRowKeysProjects => {
        console.log('selectedRowKeys Projects changed: ', selectedRowKeysProjects);
        this.setState({ selectedRowKeysProjects: selectedRowKeysProjects });
    };

    onEmployeeSelectChange = selectedRowKeysEmployees => {
        console.log('selectedRowKeys Employee changed: ', selectedRowKeysEmployees);
        this.setState({ selectedRowKeysEmployees: selectedRowKeysEmployees });
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

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Buscar
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reiniciar
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };



    render() {
        const selectedRowKeysProjects = this.state.selectedRowKeysProjects;
        const rowSelectionProjects = {
            type: 'radio',
            selectedRowKeysProjects,
            onChange: this.onProjectSelectChange,
        };
        const selectedRowKeysEmployees = this.state.selectedRowKeysEmployees;
        const rowSelectionEmployees = {
            type: 'radio',
            selectedRowKeysEmployees,
            onChange: this.onEmployeeSelectChange,
        };

        const columns = [
            {
                title: 'Proyecto',
                dataIndex: 'project',
                key: 'project',
                ...this.getColumnSearchProps('project'),
            },
            {
                title: 'Descripcion',
                dataIndex: 'description',
                key: 'description',
            },
            {
                title: 'Tareas',
                dataIndex: 'tasks',
                key: 'tasks',
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
                        <Table dataSource={dataProyects} rowSelection={rowSelectionProjects} columns={columns} />
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
                        <Table dataSource={dataEmployees} rowSelection={rowSelectionEmployees} >
                            <Column title="Empleado" dataIndex="employee" key="employee" />
                            <Column title="Descripcion" dataIndex="description" key="description" />
                            <Column title="Dedicación" dataIndex="dedication" key="description" />
                        </Table>
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


const dataProyects = [];
for (let i = 0; i < 15; i++) {
    dataProyects.push({
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
        dedication: "100%"
    });
}


export default EditContract
