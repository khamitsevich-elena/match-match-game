import React from 'react'
import { Select } from 'antd';
import './select.css' 

const { Option } = Select;

export const ShirtCardComponent = ({shirt,setShirt}) => {
    function handleChange(value) {
    setShirt(value)
  }
	return (
<>
<Select defaultValue={shirt[0]} onChange={handleChange} showArrow={false}>
{shirt.map((skir)=>
    <Option value={skir}><img className={'selectSkird'} src = {skir} alt='shirt'/></Option>
)}
    </Select>
    
    </>
  )
    }