import React from 'react';
import noavatar from '../icons/noavatar.png';
import banner from '../icons/banner.png';
import logotip from '../icons/logotip.png';

import CheckboxSelectComponent from "./CheckboxSelectComponent";
import ImageUpload from "./ImageUpload";
import DialogUpdatePhoto from "./DialogUpdatePhoto";
import Calendar from "./Calendar";

class Registration extends React.Component {
    render() {
        return (
            <div className="container">
                <img className='logotip' src={logotip} alt="logotip"/>
                <div className='registr'>
                    <h1 className='h1reg'><span>Registration</span></h1>

                </div>
                <div className="row">

                    <div className='div1 col-sm-4'>
                        <h2>Personal information</h2>
                        <form>
                            <div><input required type="text" name="firstname" placeholder='First Name'/></div>
                            <div><input required type="text" name="lasttname" placeholder='Last Name'/></div>
                            <div><input required type="number" name="phone" placeholder='Phone Number'/></div>
                            <select>
                                <option value="Confession">Confession</option>
                                <option value="Judaism">Judaism</option>
                                <option value="Christian">Christian</option>
                                <option value="Muslim">Muslim</option>
                                <option value="Other">Other</option>
                            </select>
                            <div>
                                <input type='date'/>
                            </div>

                        </form>
                    </div>
                    <div className='div2 col-sm-4'>
                        <h2>About Myself</h2>
                        <form>
                            <div>
                                <select>
                                    <option value="MartialStatus">Martial Status</option>
                                    <option value="married">Married</option>
                                    <option value="single">Single</option>
                                    <option value="couple">Couple</option>
                                </select>
                            </div>
                            <div>
                                <select>
                                    <option value="Gender">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div>
                                <CheckboxSelectComponent selectName="Food Preferences"
                                                         items="vegetarian kosher non-vegetarian other"/>

                            </div>

                            <div>
                                <CheckboxSelectComponent selectName="Languages"
                                                         items="hebrew english france russian other"/>
                            </div>
                            <div>
                                <textarea placeholder='Write few words about yourself' maxLength={300}></textarea>
                            </div>
                        </form>
                    </div>

                    <div className='div3 col-sm-3'>
                        <div>
                            <p>Change avatar</p>
                            <img src={noavatar} alt="avatar" width="150"/>

                        </div>
                        <div>
                            <p>Change banner</p>
                            <img src={banner} alt="banner" width="210"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='buttons'>

                            <a id="a" href="#" className="btn btn-primary">Cancel</a>

                            <a id="a" href="#" className="btn btn-primary">Save</a>

                    </div>
                    <ImageUpload/>
                    {/*<DialogUpdatePhoto/>*/}
                    <Calendar/>
                </div>

            </div>
        )
            ;
    }
}


export default Registration;