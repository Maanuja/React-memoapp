import { useEffect } from 'react';
import {BiReset} from 'react-icons/bi';
const Headers = ({DeleteAllHandler, DarkModeToggleHandler}) => {
    useEffect(()=>{
        const reset = document.getElementById('reset');
        reset.addEventListener('click',()=>{
            reset.classList.add('reset-all-animation');
            setTimeout(()=>{
                reset.classList.remove('reset-all-animation');
            },1000)
        })
    },[]);

    return (
        <div className="header">
            {/*the heading of our notes app*/}
            <h1><span className='color-3'>React</span> Memo</h1>
            <button onClick={()=>DarkModeToggleHandler((previousDarkMode)=>!previousDarkMode)} className="button">Screen Mode</button>
            <div id='reset' className='reset-all' onClick={DeleteAllHandler}><BiReset size={30}/></div>
        </div>
    );
}

export default Headers;