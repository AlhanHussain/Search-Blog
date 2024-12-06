import React from 'react'
const Results = ({dummyData}) => {

  return (
    <div className='results'>
        {dummyData.map((item,index)=>{
            return (
                <div key={index} className='result-item'>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Results