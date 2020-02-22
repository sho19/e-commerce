import React,{Component} from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase-utils";
class SignIn extends Component{
    constructor(){
        super();
        this.state = {email:"",password:""};
    }

    handleSubmit = event =>{
      event.preventDefault();
      this.setState({email:"",password:""});
    };

    handleChange = event =>{
      const {name,value} = event.target;
      this.setState({[name]:value})
    };

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name={"email"} value={this.state.email} required onChange={this.handleChange} label={"username"}/>
                    <FormInput type="password" value={this.state.password} required name={"password"} onChange={this.handleChange} label={"password"}/>
                    <div className="buttons">
                        <CustomButton type={"submit"} value={"Submit Form"}>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} value={"Submit Form"} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;