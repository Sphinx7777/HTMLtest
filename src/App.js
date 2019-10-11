import React, {useState} from 'react';
import s from './App.module.scss';
import LoginReduxForm from "./Components/Form/LoginReduxForm";
import LoginRegisterForm from "./Components/Form/LoginRegisterForm";
import twitter from "./icons/twitter.ico";
import facebook from "./icons/facebook.ico";
import telegram from "./icons/telegram.ico";
import instagram from "./icons/instagram.ico";
import linkedin from "./icons/linkedin.ico";
import youtube from "./icons/youtube.ico";
import lamp from "./icons/lamp.ico";
import shape from "./icons/shape_2.png";
import Login_to_bac from "./icons/Login_to_bac.png";
import compose from "./icons/compose.png";
import form_Bac from "./icons/form_Bac.png";
import register from "./icons/register.png";


export const App = ()=>{

	const [logData, setLogData] = useState(null);
	const [regData, setRegData] = useState(null);
	console.log(logData);
	console.log(regData);

	const onSubmit = (data) => {
		setLogData(data)
	};
	const submitRegData = (data) => {
		setRegData(data)
	};


	return (
		<>
			<div className={s.formWrapper}>
			{/*	<img className={s.twitterM} src={twitter} alt=""/>
				<img className={s.twitterL} src={twitter} alt=""/>
				<img className={s.twitterS} src={twitter} alt=""/>
				<img className={s.faceBookS} src={facebook} alt=""/>
				<img className={s.faceBookM} src={facebook} alt=""/>
				<img className={s.telegram} src={telegram} alt=""/>
				<img className={s.instagram} src={instagram} alt=""/>
				<img className={s.linkedin} src={linkedin} alt=""/>
				<img className={s.youtube} src={youtube} alt=""/>
				<img className={s.lamp} src={lamp} alt=""/>
				<img className={s.shape} src={shape} alt=""/>
				<img className={s.Login_to_bac} src={Login_to_bac} alt=""/>*/}
				<img className={s.form_Bac} src={form_Bac} alt=""/>


				<div className={s.form}>
					<div className={s.formHeader}>
						<img className={s.compose} src={compose} alt=""/>
					</div>
					<div className={s.formContent}>
						<div className={s.formContentLeft}>
							<div className={s.round}>
								<span className={s.roundLine}> </span>
								<div className={s.ringW}>/</div>
							</div>
							<LoginReduxForm onSubmit={onSubmit}/>
						</div>
						<div className={s.formContentRight}>
							<img className={s.register} src={register} alt=""/>
							<LoginRegisterForm submitRegData={submitRegData}/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};


