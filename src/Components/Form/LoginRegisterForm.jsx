import React from 'react';
import s from './Login.module.scss';
import {Field, reduxForm} from "redux-form";

import {InputComponent} from "./Validators/ValidatorsComponents";
import {emptyField, maxLengthCreator, minLengthCreator} from "./Validators/CheckComponent";


const maxlength30 = maxLengthCreator(30);
const maxlength50 = maxLengthCreator(50);
const minlength4 = minLengthCreator(4);


const LoginRegisterForm = ({handleSubmit, submitting,submitRegData,error}) => {


	return (
		<div className={s.login}>

			<form onSubmit={handleSubmit(submitRegData)} onKeyPress={(event) => {
				if (event.key === 'Enter') {
					handleSubmit(submitRegData)
				}
			}}>
				<div className={s.loginEmail}>

					<Field
						name="email"
						type="email"
						component={InputComponent}
						label="Email"
						maxLength='51'
						validate={[emptyField, maxlength50]}
					/>
				</div>
				<div className={s.loginName}>
					<Field
						name="name"
						type="text"
						component={InputComponent}
						label="User Name"
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
						maxLength='31'
						validate={[emptyField, minlength4, maxlength30]}
					/>
				</div>
				{/*{error && <span className={s.loginFormError}>{error}</span>}*/}
				<div className={s.loginRegistrBtns}>
					<button className={s.loginRegistrBtn} type="submit" disabled={submitting}>Registre</button>
				</div>


			</form>
		</div>


	)
};

export default reduxForm({
	form: 'loginRegisterForm',
})(LoginRegisterForm)




