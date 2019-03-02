import React from 'react';
import RegistrationForm from "../App";
import shabbat from "../images/ShabbatEvent.jpg"
import logo from "../icons/logotip.png";
import '../css/leshaStyle.css';

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page : true
        };
    }

    showRegistration = () => {
        this.setState(
            {page : false}
        );
    };

    rendMain = () => {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="shab col-sm-12"><span><img src={shabbat} alt="shabbat"/></span></div>
                </div>
                <div className="row">
                    <div className="logo col-sm-4"><span><img width={350} height={200} src={logo} alt="logo"/></span></div>
                    <div className="row">
                        <div className="void col-sm-8">
                            <div className="text col-sm-8"><span>
                        <h2>Shabbat in the family circle</h2>
                        <h5>We're looking for family where you can spend your hugs or meet shabbat.
                            Just sing in and start finding a new shabbat family.
                            More than 100 families waiting for you!</h5>
                    </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="btn col-sm-12">
                            <span>
                            <button className="btndsgn" onClick={this.showRegistration}>sign in</button>
                            </span>
                    </div>
                </div>
            </div>

        );
    };

    rendReg = () => {
        return (
            <div>
                <div><RegistrationForm/></div>
            </div>

        );
    };

    render() {
        if(this.state.page === true){
            return this.rendMain();
        }else{
            return this.rendReg();
        }

    }
}

export default MainPage;