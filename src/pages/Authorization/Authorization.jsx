import React from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './auth.css'
import '../Rules/rules.css'
import { setUserinLocalStorage } from '../../localStorage'

export const AuthorizationComponent = ({setUser,setNewGame}) => {
	const onFinish = (values) => {
		setUser(`${values.firstName} ${values.lastName}`)
		setUserinLocalStorage(`${values.firstName} ${values.lastName}`)
		setNewGame()
	}
	return (
		<>
		<div className='authHeader'></div>
		<div className={'container'}>
			<div className='auth'>Authorization</div>
			<Form name='normal_login' className={'formcontainer'} initialValues={{ remember: true }} onFinish={onFinish}>
				<Form.Item

					name='firstName'
					rules={[
						{
							required: true,
							message: 'Please input your First Name!',
						},
					]}>
					<Input prefix={<UserOutlined />} placeholder='FirstName' />
				</Form.Item>
				<Form.Item
			
					name='lastName'
					rules={[
						{
							required: true,
							message: 'Please input your Last Name!',
						},
					]}>
					<Input prefix={<UserOutlined />} placeholder='LastName' />
				</Form.Item>
				<Form.Item>
					<Button className='playButton' type='primary' htmlType='submit' >
						Play
					</Button>
				</Form.Item>
			</Form>
			</div>
		</>
	)
}
