import React, { Component } from 'react'
import { Modal, InputNumber, Space } from 'antd'


export class EditEmployeeContractDedication extends Component {
    render() {
        return (
            <div>
                <Modal title="Editar dedicación de empleado" visible={this.props.visible} onOk={this.props.onOk} onCancel={this.props.onCancel}>
                    <Space direction="vertical" size="middle">
                        <span>Empleado x</span>
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
                    </Space>
                </Modal>
            </div>
        )
    }
}

export default EditEmployeeContractDedication
