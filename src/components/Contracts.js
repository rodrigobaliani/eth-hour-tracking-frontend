import React, { Component } from 'react';
import { PageHeader, Table, Tag, Button } from 'antd';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AddContractDrawer from './AddContractDrawer';

const { Column } = Table;


class Contracts extends Component {

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
                    title="Contratos"
                    style={{ backgroundColor: '#f0f2f5' }}
                    extra={[
                        <Link to="/contracts/projects" >
                            <Button key="1" type="primary" shape="circle" icon={<EditOutlined />} size="large" />
                        </Link>,
                        <Button key="2" type="primary" shape="circle" icon={<PlusOutlined />} size="large" onClick={this.showDrawer} />
                    ]}
                />
                <AddContractDrawer visible={this.state.showDrawer} onCloseDrawer={this.onCloseDrawer} />
                <Table dataSource={data} rowSelection={rowSelection} >
                    <Column title="Contrato Glow" dataIndex="glow_contract" key="glow_contract" />
                    <Column title="Descripcion" dataIndex="description" key="description" />
                    <Column
                        title="Proyectos"
                        dataIndex="projects"
                        key="projects"
                        render={projects => (
                            <>
                                {projects.map(project => (
                                    <Tag color="blue" key={projects}>
                                        {project}
                                    </Tag>
                                ))}
                            </>
                        )} />
                </Table>
            </div >
        )
    }
}

const projects = [];
for (let i = 0; i < 5; i++) {
    projects.push("Project " + i);
}


const data = [];
for (let i = 0; i < 15; i++) {
    data.push({
        key: i,
        glow_contract: "Contrato " + i,
        description: "Descripcion contrato " + i,
        projects: projects,
    });
}

export default Contracts;
