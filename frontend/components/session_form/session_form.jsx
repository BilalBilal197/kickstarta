import React from 'react';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: '', password: ''};
     this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

   
    render() {

        // let emailInput;
        // let name = 'Email:' + emailInput;
        
        // if(this.props.formType === "signup"){
        //         emailInput = ( <input type="email"
        //         value={this.state.password}
        //         onChange={this.update('email')}
        //         className="login-input"
        //     />);} else {
        //         emailInput = null;
        //     }
        
        if(this.props.formType === "signup"){
            return ( <div className="signup-ct">
                
                <div className="main-body">
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="have-account">
                        Have an account? <span>{this.props.navLink}</span>
                    </div>
                    <div className="main-form">
                        <div className="signup">
                            Sign up
                        </div>
                                                        
                        <label>
                            
                            <input type="text"
                            placeholder="Name"
                                value={this.state.name}
                                onChange={this.update('name')}
                                className="login-input"
                            />
                        </label>
                        
                        <label>
                            
                            <input type="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                        />
                                
                        </label>
                        
                        <label>
                            
                                <input type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                    
                        {/* <label className="create-acct" type="">Create account</label> */}
                       
                        
                                        
                            <input className="create-acct" type="submit" value="Create account" />
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            );}
            else {
                return ( <div className="login-ct">
                    <div className="main-body">
                    <div className="login-form-container">
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            
                            <div className="login">
                            Log in
                            </div>
                            
                            <br/>
                            


                            <div className="main-form">
                                
                                <label><input type="email"
                                    placeholder='Email'
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                />
                                </label>
                                
                                <br/>
                                <label>
                                    <input type="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="login-input"
                                    />
                                </label>
                                
                                <br/>
                               
                                <input className="login-btn" type="submit" value={this.props.formType} />
                                <br/>

                                <div className="new-signin">

                                        New to Kickstarter? <span> {this.props.navLink}</span>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
                </div>
                    
                );

            }
        

    }


}

export default SessionForm;

