import React, { Component } from 'react';
import { PageHeader, Table, Tag, Button, Input, Space } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, TeamOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import AddContractDrawer from './drawer/AddContractDrawer';
import EditContractEmployeesModal from './modal/EditContractEmployeesModal'

class Contracts extends Component {

    state = {
        showDrawer: false,
        selectedRowKeys: [],
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

        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys,
            onChange: this.onSelectChange,
        };

        const columns = [
            {
                title: 'Contrato Glow',
                dataIndex: 'glow_contract',
                key: 'glow_contract',
                ...this.getColumnSearchProps('glow_contract'),
            },
            {
                title: 'Descripcion',
                dataIndex: 'description',
                key: 'description',
            },
            {
                title: 'Proyectos',
                dataIndex: 'projects',
                key: 'projects',
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
                <Table dataSource={data} rowSelection={rowSelection} columns={columns} />

            </div >
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
