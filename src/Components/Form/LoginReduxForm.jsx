import React from 'react';
import s from './Login.module.scss';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "./Validators/ValidatorsComponents";
import {emptyField, maxLengthCreator, minLengthCreator} from "./Validators/CheckComponent";


const maxlength30 = maxLengthCreator(30);
const minlength4 = minLengthCreator(4);


const LoginReduxForm = ({handleSubmit, submitting,error}) => {


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
						label="User Name"
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
						label="Password"
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
						/>
						<span className={s.checkPass}>remember My password</span>
						<div className={s.checkTitle}>
							You no longer need to enter a password every time you use the site
						</div>
					</div>




				</div>
				<div className={s.loginFormBtn}>
					<button className={s.loginBtn} type="submit" disabled={submitting}>Login</button>
				</div>

			{/*	{error && <span className={s.loginFormError}>{error}</span>}*/}

			</form>
		</div>


	)
};

export default reduxForm({
	form: 'loginForm',
})(LoginReduxForm)




