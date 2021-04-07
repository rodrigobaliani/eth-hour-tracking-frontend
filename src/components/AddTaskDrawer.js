
import React, { Component } from 'react'
import { Drawer, Form, Input, Button } from 'antd'

export default class AddTaskDrawer extends Component {

    onFinish = (values) => {
        console.log(values);
    };

    render() {
        return (
            <div>
                <Drawer
                    title="Crear nueva tarea"
                    width={360}
                    onClose={this.props.onCloseDrawer}
                    visible={this.props.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div style={{ textAlign: 'right' }}>
                            <Button onClick={this.props.onCloseDrawer} style={{ marginRight: 8 }}>Cancelar</Button>
                            <Button onClick={this.props.onCloseDrawer} type="primary" htmlType="submit" >Crear </Button>
                        </div>
                    }
                >
                    <Form onFinish={this.onFinish}>
                        <Form.Item name="name">
                            <div style={{ marginBottom: 16 }}><Input placeholder="Nombre" /></div>
                        </Form.Item>
                        <Form.Item name="description">
                            <div style={{ marginBottom: 16 }}><Input placeholder="Descripcion" /></div>
                        </Form.Item>
                    </Form>
                </Drawer>
            </div>
        )
    }
}
