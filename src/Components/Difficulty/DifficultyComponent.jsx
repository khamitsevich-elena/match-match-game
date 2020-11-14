import React from 'react'
import { Select } from 'antd';

const { Option } = Select;

export const DifficultyComponent = ({difficulty,setDifficulty}) => {
  const levelOfDifficult = ['Low (5*2)','Medium (6*3)','High (8*3)']
    function handleChange(value) {
    setDifficulty(value)
  }
	return (
<>
  <Select className='select' defaultValue={difficulty[0]} onChange={handleChange} showArrow={false}>
  {difficulty.map((diff,index)=>
  <Option value={diff}>{levelOfDifficult[index]}</Option>
  )}
    </Select>
    </>
  )
}