import React, { useEffect } from 'react';
import useSWRMutation from 'swr/mutation';
import {
    createMember,
    member,
    updateMember,
} from '../../service/Member/MemberService/MemberService';
import {Button, Col, Drawer, Form, FormInstance, Input, Row} from 'antd';
import Member from '../../service/Member/Interface/InterfaceMember';

type DrawerType = {
    open: boolean;
    setOpen: any;
    fields?: Member;
};

export const MemberAntDrawer: React.FC<DrawerType> = ({open, setOpen, fields}: DrawerType) => {
    const [form] = Form.useForm();
    const onClose = () => {
        form.resetFields();
        setOpen(false);
    };
    const onFinish = async (values: Member) => {
        values.nickname = String(values.nickname);
        values.name = String(values.name);
        values.lastname = String(values.lastname);
        values.age = Number(values.age);
        // values.email = String(values.email)
        values.password = String(values.password);
        // values.role = Number(values.role)
        await trigger(values);
        onClose();
    };

    useEffect(() => {
        form.setFieldsValue(fields);
    }, [fields, form]);

    const { trigger, isMutating } = useSWRMutation(
        fields ? `${member}/${fields.id}` : member,
        fields ? updateMember : createMember
    );

    return (
        <Drawer
            title="Edit"
            width={720}
            onClose={onClose}
            open={open}
            bodyStyle={{ paddingBottom: 80 }}
        >
            <FormSection form={form} loading={isMutating} onFinish={onFinish} />
        </Drawer>
    );
};



type FormType = {
 form:FormInstance;
 loading: boolean;
 onFinish: any
}
const FormSection: React.FC<FormType> = ({ form, loading, onFinish }) => (
    <Form
        layout="vertical"
        hideRequiredMark
        onFinish={onFinish}
        form={form}
    >
        <Row gutter={16}>
            <Col span={12}>
                <Form.Item
                    name="nickname"
                    label="Nickname"
                    rules={[{ required: true, message: 'Please enter a episode' }]}
                >
                    <Input placeholder="Please enter a episode" />
                </Form.Item>
            </Col>
            <Col span ={12} >
                <Form.Item
                    name="name"
                    label="Nombre"
                    rules={[{ required: true, message: 'Please enter user name' }]}
                >
                    <Input placeholder="Please enter user name" />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    name="lastname"
                    label="Apellido"
                    rules={[{ required: true, message: 'Please enter a episode' }]}
                >
                    <Input placeholder="Please enter a episode" />
                </Form.Item>
            </Col>
         
            <Col span={12}>
                <Form.Item
                    name="age"
                    label="Edad"
                    rules={[{ required: true, message: 'Please enter a episode' }]}
                >
                    <Input placeholder="Please enter a episode" />
                </Form.Item>
            </Col>
            {/* <Col span={12}>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: 'Please enter a episode' }]}
                >
                    <Input placeholder="Please enter a episode" />
                </Form.Item>
            </Col> */}
            <Col span={12}>
                <Form.Item
                    name="password"
                    label="Contraseña"
                    rules={[{ required: true, message: 'Please enter a episode' }]}
                >
                    <Input placeholder="Please enter a episode" />
                </Form.Item>
            </Col>
            {/* <Col span={12}>
                <Form.Item
                    name="role"
                    label="Rol"
                    rules={[{ required: true, message: 'Please enter a episode' }]}
                >
                    <Input placeholder="Please enter a episode" />
                </Form.Item>
            </Col> */}
           
        </Row>
        <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
                Save
            </Button>
        </Form.Item>
    </Form>
)