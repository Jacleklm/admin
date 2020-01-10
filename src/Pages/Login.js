import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { Card, Input, Icon, Button, Spin, message } from 'antd'
import '../static/css/Login.css'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const Login = props => {
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {}, [])

	const checkLogin = () => {
		setIsLoading(true)

		if (!userName) {
			setIsLoading(false)
			message.error('用户名不能为空')
			return false
		} else if (!password) {
			setIsLoading(false)
			message.error('密码不能为空')
			return false
		}
		let dataProps = {
			userName: userName,
			password: password
		}
		axios({
			method: 'post',
			url: servicePath.checkLogin,
			data: dataProps,
			withCredentials: true // 这一条要带！作用？
		}).then(res => {
			setIsLoading(false)
			if (res.data.data === '登录成功') {
				localStorage.setItem('openId', res.data.openId) // 把token存到本地
				props.history.push('/index') // 这句代码竟然能跳转路由，由于Login组件直接是被<Route>包裹所以能这么写？
				console.log(props)
				console.log(props.history)
			} else {
				message.error('用户名密码错误')
			}
		})

		setTimeout(() => {
			setIsLoading(false)
		}, 1000)
	}

	return (
		<div className="login-div">
			<Spin tip="Loading..." spinning={isLoading}>
				<Card title="JacleKlm Blog  System" bordered={true} style={{ width: 400 }}>
					<Input
						id="userName"
						size="large"
						placeholder="Enter your userName"
						prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
						onChange={e => {
							setUserName(e.target.value)
						}}
					/>
					<br />
					<br />
					<Input.Password
						id="password"
						size="large"
						placeholder="Enter your password"
						prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
						onChange={e => {
							setPassword(e.target.value)
						}}
					/>
					<br />
					<br />
					<Button type="primary" size="large" block onClick={checkLogin}>
						Login in
					</Button>
				</Card>
			</Spin>
		</div>
	)
}

export default Login
