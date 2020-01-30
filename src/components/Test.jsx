import React from 'react'

export default function (props) {
    return (
        <>
            数字：{props.count}
            <button onClick={props.add} >+</button>
            <button  onClick={props.jian}>-</button>
            <div>测试redux</div>
        </>
    )
}
