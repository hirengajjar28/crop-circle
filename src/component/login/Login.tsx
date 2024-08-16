import { useState } from 'react';
import './Login.scss';
export function Login() {
    let [status, setStatus] = useState(false)
    function setPhone() {
        setStatus(status = !status)
    }
    return (
        <>
            <div className='loginContainer'>
                <div className='login'>
                    <div className='icon'>
                        <div className='icon-login'></div>
                    </div>
                    <div className='top'>
                        <h1 className='t1'>Welcome to <span>Crop Circle</span></h1>
                        <p>Please sign in or sign up below.</p>
                    </div>
                    <div className='middle'>
                        <div className='form-container'>
                            <div className="row space-y-15">
                                <div className="col">
                                    <div className='flex justify-between align-center'>
                                        <label className='label' htmlFor="phone">{status ? 'Phone Number' : 'Email Address'}</label>
                                        <label className='label gray' onClick={() => setPhone()}>{status ? 'Use Email' : 'Use Phone Number'}</label>
                                    </div>
                                    {status ?
                                        <input type="tel" placeholder='Phone' /> : <input type="email" placeholder='Email' />
                                    }
                                </div>
                                <div className="col">
                                    <button className='btn-gray'>{status ? 'Continue With Email' : 'Continue With Phone'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
