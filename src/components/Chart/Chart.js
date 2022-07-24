import React from 'react'
import ChartBar from './ChartBar'

const Chart = (props) => {

  const dataPointsValue = props.dataPoints.map((item)=>item.value)
  const totalMaxValue = dataPointsValue.reduce((pre,cur)=> pre + cur ,0);

  return (
    <div className='chart'>
      {props.dataPoints.map((item,index)=>

      <ChartBar 
        key={item.label}
        value={item.value}
        maxValue={totalMaxValue}
        label={item.label}
      />
      )}
    </div>
  )
}

export default Chart