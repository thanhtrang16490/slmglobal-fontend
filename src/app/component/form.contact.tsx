'use client'
import { Form, Input, Button, Select, Space, Upload, UploadProps, message } from 'antd';
import type { SelectProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;


const props: UploadProps = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const options: SelectProps['options'] = [
    { label: 'Renewable Energy', value: 'renewable-energy' },
    { label: 'Mounting Screw', value: 'mounting-screw' },
    { label: 'Aluminum Frame', value: 'alumilum-frame' },
    { label: 'Iron Steel Casting', value: 'iron-steel-casting' },
    { label: 'Moulding Extruded Rubber', value: 'moulding-extruded-rubber' },
    { label: 'Plywood', value: 'plywood' },
    { label: 'Plastic Pipes', value: 'plastic-pipes' },
    { label: 'Brass Vales & Taps', value: 'brass-vales-taps' },
    { label: 'Palm Plate', value: 'palm-plate' },
    { label: 'Grass Green Straw', value: 'Grass-green-straw' },
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
    return (<Form layout="vertical"
        initialValues={{
            name: 'Your Name',
            company: 'Your Company',
            phone: 'Your Phone Number',
            email: 'Your Email',
            category: 'Your Category',
            quantity: 'Your Quantity',
            requirements: 'Your Requirements',
            location: 'Your Location',
        }}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item label="Name" name="name" style={{ flex: 1, marginRight: '1rem' }}>
                <Input addonBefore={selectBefore} defaultValue="Your Name" />
            </Form.Item>
            <Form.Item label="Company" name="company" style={{ flex: 1, marginRight: '1rem' }}>
                <Input placeholder="Your Company" />
            </Form.Item>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item label="Phone" name="phone" style={{ flex: 1, marginRight: '1rem' }}>
                <Input placeholder="Your Phone Number" />
            </Form.Item>
            <Form.Item label="Email" name="email" style={{ flex: 1 }}>
                <Input placeholder="Your Email" />
            </Form.Item>
        </div>


        <Form.Item label="Category" name="category">
            <CatogerySelection />
        </Form.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item label="Quantity of ordered" name="quantity" style={{ flex: 1, marginRight: '1rem' }}>
                <Input placeholder="" />
            </Form.Item>
            <Form.Item label="Technical drawings / Blueprint" name="location" style={{ flex: 1, marginRight: '1rem' }}>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
            </Form.Item>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            <Form.Item label="Standard requirements" name="requirements" style={{ flex: 1, marginRight: '1rem' }}>
                <Input placeholder="" />
            </Form.Item>
            <Form.Item label="Delivery port location" name="location" style={{ flex: 1, marginRight: '1rem' }}>
                <Input placeholder="" />
            </Form.Item>

        </div>



        <Form.Item label="Message" name="message">
            <Input.TextArea placeholder="Your Message" />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Send your RFQ
            </Button>
        </Form.Item>
    </Form>)

}
export default FormContact;