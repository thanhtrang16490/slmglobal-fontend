'use client'
import { Form, Input, Button } from 'antd';
const FormContact = () => {
    return (<Form layout="vertical">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item label="Name" name="name" style={{ flex: 1, marginRight: '1rem' }}>
                <Input placeholder="Your Name" />
            </Form.Item>
            <Form.Item label="Email" name="email" style={{ flex: 1 }}>
                <Input placeholder="Your Email" />
            </Form.Item>
        </div>
        <Form.Item label="Message" name="message">
            <Input.TextArea placeholder="Your Message" />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>)

}
export default FormContact;