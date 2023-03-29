import React, { useState } from 'react'

function RegisForm() {
    const data = {
        name: '',
        email: '',
        number: '',
        password: '',
        confirmPass: ''
    }
    const [inputData, setInputData] = useState(data)
    const [flag, setFlag] = useState(false)
    function handleData(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
        console.log(inputData)
    }
    function handleSUbmit(e) {
        e.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.number || !inputData.password || !inputData.confirmPass) {
            alert("Please Enter Your Detail. All Fields Are Mandatory")

        }
        else {
            if(inputData.password.length<8){
                alert("Password Must be Minimum of 8 Length")
            }
            else if(inputData.number.length<10){
                alert("Mobile Number Must Contain 10 Number")
            }
            else if (inputData.password !== inputData.confirmPass) {
                alert("Password Doesn't Match")
            }
            else {
                setFlag(true)
                
            }
        }
        

        

    }

    return (
        <div>

            <pre>{(flag) ? <h2 className='ui'>Hello <span>{inputData.name}</span>, You've Successfully Registered </h2> : null}</pre>

            <form onSubmit={handleSUbmit}>

                <div className='container'>
                    <div className='header'>Registration Form</div>
                    <div>
                        <input type='text' placeholder='Enter Your Name' name='name' value={inputData.name} onChange={handleData}></input>
                    </div>
                    <div>
                        <input type='email' placeholder='Enter Your Email' name='email' value={inputData.email} onChange={handleData}></input>
                    </div>
                    <div>
                        <input type='tel' placeholder='Enter Your Mobile Number' name='number' value={inputData.number} onChange={handleData}></input>
                    </div>
                    <div>
                        <input type='password'  placeholder='Create Your Password' name='password' value={inputData.password} onChange={handleData}></input>
                    </div>
                    <div>
                        <input type='password' placeholder='Confirm Your Password' name='confirmPass' value={inputData.confirmPass} onChange={handleData}></input>
                    </div>
                    <div>
                        <button className='btn' type='submit'>Submit</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default RegisForm