import React, { Component } from 'react'
import { Modal, Transfer } from 'antd'

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
                <Modal title="Asignar empleados a tarea" visible={this.props.visible} onOk={this.props.onOk} onCancel={this.props.onCancel}>
                    <Transfer
                        dataSource={this.state.mockData}
                        showSearch
                        filterOption={this.filterOption}
                        targetKeys={this.state.targetKeys}
                        onChange={this.handleChange}
                        onSearch={this.handleSearch}
                        render={item => item.title}
                    />
                </Modal>
            </div>
        )
    }
}

export default EditTaskEmployeesModal
