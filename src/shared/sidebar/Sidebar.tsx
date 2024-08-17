import { useState } from 'react';
import './Sidebar.scss';
export function Sidebar() {
    let [status, setStatus] = useState(true);
    let collapse = () => {
        setStatus(status = !status)
    }
    const list = [
        { id: 0, name: 'Dashboard' },
        { id: 1, name: 'Buy & Sell' },
        { id: 2, name: 'Messages' },
        { id: 3, name: 'Crops' },
        { id: 4, name: 'Credit Debit' },
        { id: 5, name: 'Reports' },
        { id: 6, name: 'Settings' }
    ]

    return (
        <>
            <div className='navigation'>
                <div className={`sidebar ${status ? 'slideInLeft' : 'slide-left'}`} style={status ? { width: '280px' } : { width: '85px' }}>
                    <div className="arrow" onClick={collapse}></div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <ul className='navbar'>
                        <li>

                            {
                                list.map((data) =>  <a href="javascript:void(0)">
                                <div className='iconItem'></div>
                                <span className={`sidebar trans ${status ? 'navText' : 'hide'}`}>{data.name}</span></a>)
                            }
                           
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
