'use client'
import { Form, Input, Button, Select, Space } from 'antd';
import type { SelectProps } from 'antd';


const options: SelectProps['options'] = [
    { label: 'Renewable Energy', value: 'renewable-energy' },
    { label: 'Mounting Screw', value: 'mounting-screw' },
    { label: 'Alumilumn Frame', value: 'Orange' },
    { label: 'Iron Steel Casting', value: 'Apple' },
    { label: 'Moulding Extruded Rubber', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
    { label: 'Orange', value: 'Orange' },
];

const selectBefore = (
    <Select defaultValue="Mr">
        <Option value="Mr">Mr.</Option>
        <Option value="Ms">Ms.</Option>
        <Option value="Mrs">Mrs.</Option>
        );
    </Select>
);


const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
};


const CatogerySelection: React.FC = () => (
    <Space style={{ width: '100%' }} direction="vertical">
        <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['mounting-screw', 'renewable-energy']}
            onChange={handleChange}
            options={options}
        />

    </Space>
);

const FormContact = () => {
    return (<Form layout="vertical">

        <Form.Item label="Name" name="name" style={{ flex: 1, marginRight: '1rem' }}>
            <Input addonBefore={selectBefore} defaultValue="Your Name" />
        </Form.Item>
        <Form.Item label="Company" name="company" style={{ flex: 1, marginRight: '1rem' }}>
            <Input placeholder="Your Company" />
        </Form.Item>


        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item label="Phone" name="phone" style={{ flex: 1, marginRight: '1rem' }}>
                <Input placeholder="Your Phone Number" />
            </Form.Item>
            <Form.Item label="Email" name="email" style={{ flex: 1 }}>
                <Input placeholder="Your Email" />
            </Form.Item>
        </div>
        <Form.Item label="Catogery" name="catogery">
            <CatogerySelection />
        </Form.Item>
        <Form.Item label="Quantity of ordered" name="name" style={{ flex: 1, marginRight: '1rem' }}>
            <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Standard requirements" name="name" style={{ flex: 1, marginRight: '1rem' }}>
            <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Delivery port location" name="name" style={{ flex: 1, marginRight: '1rem' }}>
            <Input placeholder="" />
        </Form.Item>


        <Form.Item label="Message" name="message">
            <Input.TextArea placeholder="Your Message" />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Quote Now
            </Button>
        </Form.Item>
    </Form>)

}
export default FormContact;