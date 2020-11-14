import React from 'react'
import { getTable } from '../../localStorage'
import { Tabs } from 'antd';
import './table.css'

const { TabPane } = Tabs;

export const TopTable = () => {
    getTable()
    console.log(JSON.parse(localStorage.getItem("topTable")))
    const LowTable = JSON.parse(localStorage.getItem("topTable"))!==null ? JSON.parse(localStorage.getItem("topTable")).filter(el=>el.difficulty===10) : []
    LowTable.length = 10
    const MediumTable = JSON.parse(localStorage.getItem("topTable"))!==null ? JSON.parse(localStorage.getItem("topTable")).filter(el=>el.difficulty===18) : []
    MediumTable.length = 10
    const HighTable = JSON.parse(localStorage.getItem("topTable"))!==null ? JSON.parse(localStorage.getItem("topTable")).filter(el=>el.difficulty===24) : []
    HighTable.length = 10
	return (
    <>
    <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Low" key="1" style={{ height: '50vh'}}>
    <div className='gridTable'>
        <div className='margin'><b>Name</b></div>
        <div className='margin'><b>Time</b></div>
        </div>
    {LowTable.map((el,index)=><div className='gridTable'>
        <div className='margin1'>{index+1}.{`\t`}{el.name}</div>
        <div className='margin'>{el.time} c</div>
        </div>
    )}
    </TabPane>
    <TabPane tab="Meduim" key="2" style={{ height: '50vh' }}>
    <div className='gridTable'>
        <div className='margin'><b>Name</b></div>
        <div className='margin'><b>Time</b></div>
        </div>
    {MediumTable.map((el,index)=><div className='gridTable'>
        <div className='margin1'>{index+1}.{`\t`}{el.name}</div>
        <div className='margin'>{el.time} c</div>
        </div>
    )}
    </TabPane>
    <TabPane tab="High" key="3" style={{ height: '50vh' }}>
    <div className='gridTable'>
        <div className='margin'><b>Name</b></div>
        <div className='margin'><b>Time</b></div>
        </div>
    {HighTable.map((el,index)=><div className='gridTable'>
        <div className='margin1'>{index+1}.{`\t`}{el.name}</div>
        <div className='margin'>{el.time} c</div>
        </div>
    )}
    </TabPane>
  </Tabs>
        </>
	)
}