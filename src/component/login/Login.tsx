import './Login.scss';

export function Login() {
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
                            <div className="row">
                                <div className="col">
                                    <label className='label' htmlFor="email">Email</label>
                                    <input type="text" />
                                </div>
                                <div className="col">
                                    <button className='btn-gray'>Continue With Email</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
