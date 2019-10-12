import React from 'react';
import s from './Login.module.scss';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "./Validators/ValidatorsComponents";
import {emptyField, maxLengthCreator, minLengthCreator} from "./Validators/CheckComponent";
import longer_enter_password from "../../icons/longer_enter_password.png";
import login_btn from "../../icons/login_btn.png";


const maxlength30 = maxLengthCreator(30);
const minlength4 = minLengthCreator(4);


const LoginForm = ({handleSubmit, submitting, error}) => {


	return (
		<div className={s.login}>
			<form onSubmit={handleSubmit} onKeyPress={(event) => {
				if (event.key === 'Enter') {
					handleSubmit()
				}
			}}>
				<div className={s.loginEmail}>
					<Field
						name="name"
						type="text"
						component={InputComponent}
						placeholder='User Name'
						maxLength='31'
						validate={[emptyField, maxlength30]}
					/>
				</div>
				<div className={s.loginPass}>
					<Field
						name="password"
						type="password"
						component={InputComponent}
						placeholder='Password'
						maxLength='31'
						validate={[emptyField, minlength4, maxlength30]}
					/>
				</div>
				<div className={s.loginCheck}>
					<div className={s.check}>
						<Field
							name="rememberMe"
							type="checkbox"
							component={InputComponent}
							child='Remember My password'
						/>
						<img className={s.longer_enter_password} src={longer_enter_password} alt=""/>
					</div>
				</div>
				<button className={s.loginBtn} type="submit" disabled={submitting}><img className={s.login_btn} src={login_btn}
																																								alt=""/></button>
				{/*	{error && <span className={s.loginFormError}>{error}</span>}*/}
			</form>
		</div>


	)
};

export default reduxForm({
	form: 'loginForm',
})(LoginForm)




