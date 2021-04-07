import React, { Component } from 'react'
import { Modal, Transfer, InputNumber, Space } from 'antd'

export class EditTaskEmployeesModal extends Component {

    state = {
        mockData: [],
        targetKeys: [],
    };

    componentDidMount() {
        this.getMock();
    }

    getMock = () => {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                key: i.toString(),
                title: `Empleado ${i + 1}`,
                description: `description of Empleado ${i + 1}`,
                chosen: Math.random() * 2 > 1,
            };
            if (data.chosen) {
                targetKeys.push(data.key);
            }
            mockData.push(data);
        }
        this.setState({ mockData, targetKeys });
    };

    filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;

    handleChange = targetKeys => {
        this.setState({ targetKeys });
    };

    handleSearch = (dir, value) => {
        console.log('search:', dir, value);
    };

    render() {
        return (
            <div>
                <Modal title="Asignar empleados" visible={this.props.visible} onOk={this.props.onOk} onCancel={this.props.onCancel}>
                    <Space direction="vertical" size="middle">
                        <Space>
                            <span>Dedicación:</span>
                            <InputNumber
                                defaultValue={100}
                                min={0}
                                max={100}
                                formatter={value => `${value}%`}
                                parser={value => value.replace('%', '')}
                            />
                        </Space>
                        <Transfer
                            dataSource={this.state.mockData}
                            showSearch
                            filterOption={this.filterOption}
                            targetKeys={this.state.targetKeys}
                            onChange={this.handleChange}
                            onSearch={this.handleSearch}
                            render={item => item.title}
                        />
                    </Space>
                </Modal>
            </div>
        )
    }
}

export default EditTaskEmployeesModal
