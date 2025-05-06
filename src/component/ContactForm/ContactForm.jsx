import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
    const [form] = Form.useForm();

    const handleFinish = () => {
        message.success('Geri bildiriminiz gönderilmiştir.');
        form.resetFields();
    };

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactHeader}>
                <h2 className={styles.contactTitle}>Get In Touch With Us</h2>
                <p className={styles.contactSubtitle}>
                    For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
            </div>

            <div className={styles.contactContent}>
                <div className={styles.contactInfo}>
                    <div className={styles.infoItem}>
                        <EnvironmentOutlined className={styles.icon} />
                        <div>
                            <h4>Address</h4>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <PhoneOutlined className={styles.icon} />
                        <div>
                            <h4>Phone</h4>
                            <p>
                                Mobile: (+84) 546-6789 <br />
                                Hotline: (+84) 456-6789
                            </p>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <ClockCircleOutlined className={styles.icon} />
                        <div>
                            <h4>Working Time</h4>
                            <p>
                                Monday-Friday: 9:00 - 22:00 <br />
                                Saturday-Sunday: 9:00 - 21:00
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.contactForm}>
                    <Form form={form} layout="vertical" onFinish={handleFinish}>
                        <Form.Item
                            label={<label className="form-label">Your name</label>}
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input placeholder="John Doe" />
                        </Form.Item>
                        <Form.Item
                            label={<label className="form-label">Email adress</label>}
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your email address!' },
                                { type: 'email', message: 'Please input a valid email address!' },
                            ]}
                        >
                            <Input placeholder="Abc@def.com" />
                        </Form.Item>
                        <Form.Item label={<label className="form-label">Subject</label>} name="subject">
                            <Input placeholder="This is optional" />
                        </Form.Item>
                        <Form.Item
                            label={<label className="form-label">Message</label>}
                            name="message"
                            rules={[{ required: true, message: 'Please enter your message!' }]}
                        >
                            <Input.TextArea
                                placeholder="Hi! I’d like to ask about ..."
                                style={{ height: '200px', resize: 'none' }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className={styles.submitButton}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;