import React, { useState } from 'react';

const Counter = () => {
    //stale state: state không thay đổi giá trị mới khi re-render component 
    const [count, setCount] = useState(0);
    const handleIncremwnt = () =>{
        setTimeout(function delay(){
            console.log('delay');
            setCount(count => count + 1 ); 
        }, 1000)
    }
    return (
        <div onClick={handleIncremwnt}>
           Increment {count}
        </div>
    );
};

export default Counter;