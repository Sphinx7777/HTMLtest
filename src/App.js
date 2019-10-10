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
import note from "./icons/twitter.ico";


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
				<img className={s.twitterM} src={twitter} alt=""/>
				<img className={s.twitterL} src={twitter} alt=""/>
				<img className={s.twitterS} src={twitter} alt=""/>
				<img className={s.faceBookS} src={facebook} alt=""/>
				<img className={s.faceBookM} src={facebook} alt=""/>
				<img className={s.telegram} src={telegram} alt=""/>
				<img className={s.instagram} src={instagram} alt=""/>
				<img className={s.linkedin} src={linkedin} alt=""/>
				<img className={s.youtube} src={youtube} alt=""/>
				<div className={s.headerTitleBac}>Login To Your Account / Register New</div>
				<div className={s.form}>
					<div className={s.formHeader}>
						<div className={s.note}><img src={note} alt=""/></div>
						<div className={s.headerTitle}>Login To Your Account / Register New</div>
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
							<div className={s.reg}>Register</div>
							<LoginRegisterForm submitRegData={submitRegData}/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};


