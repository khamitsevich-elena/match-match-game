import React from 'react'
import { Modal } from 'antd'
import { TopTable } from './TopTable'
import { Link } from 'react-router-dom'

class ModalTable extends React.Component {
	state = { visible: false }

	showModal = () => {
		this.setState({
			visible: true,
		})
	}

	handleOk = (e) => {
		this.setState({
			visible: false,
		})
	}

	handleCancel = (e) => {
		this.setState({
			visible: false,
		})
	}

	render() {
		return (
			<>
			<Link className='button'  onClick={this.showModal}><font>High score table</font></Link>
				<Modal
					destroyOnClose
					footer={null}
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}>
					<TopTable/>
				</Modal>
			</>
		)
	}
}

export default ModalTable
