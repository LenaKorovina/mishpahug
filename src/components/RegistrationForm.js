import React from 'react';
import avatar from '../images/pexels-photo-286625.jpeg';
import blurmain from '../images/pexels-photo-106936.jpeg';
import '../css/leshaStyle.css'

class RegistrationForm extends React.Component{


    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <div class="bacgroundrg"><img src={blurmain} alt="backgroundrg"/></div>
                    <div className='registr'>
                        <h1 className='regist'><span>Registration</span></h1>
                        <div className="avatar">
                            <img src={avatar} alt="avatar"/>
                        </div>
                        <div>
                            <p>
                                <input type="radio" value="family" checked name="type"/>Family
                                <input type="radio" value="guest" checked name="type"/>Guest
                            </p>
                        </div>
                        <div><div className='forms'>
                            <form>
                                <div><input required type="email" name="mail" placeholder='E-mail' pattern="#[0-9A-Fa-f]{6}"/></div>
                                <div><input required type="tel" name="phone" placeholder='Telephone'/></div>
                                <div><input required type="text" name="password" placeholder='Password'/></div>
                            </form></div>
                            <div>
                                <button className="btnrg" onClick={this.showRegistration}>save</button>
                            </div>
                        </div>
                    </div>
                </div></div>
        )
    }
}

export default RegistrationForm;