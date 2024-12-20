import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { isLogued, setIsLogued } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import es from "../../assets/flags/es.png";
import en from "../../assets/flags/en.png";
import "./menu.scss";
import GButton from "../GButton/GButton";
import { language } from "../../types";

function Menu() {
	const { i18n } = useTranslation();
	const isCurrentLogued = useSelector(isLogued);

	function changeLanguage(lang: language) {
		i18n.changeLanguage(lang);
	}

	const dispacth = useDispatch();
	const { t } = useTranslation();

	return (
		<header>
			<div className='menu'>
				<span className='menu--title'>Prueba 480</span>
				<div className='menu--buttons'>
					{isCurrentLogued && (
						<GButton
							type='button'
							mode='warning'
							onClick={() => {
								dispacth(setIsLogued(false));
							}}
						>
							{t("closeSession")}
						</GButton>
					)}
					<GButton
						type='button'
						onClick={() => changeLanguage("es")}
					>
						<img
							src={es}
							className='menu--flag'
							alt='idioma español'
						/>
					</GButton>
					<GButton
						type='button'
						onClick={() => changeLanguage("en")}
					>
						<img
							src={en}
							className='menu--flag'
							alt='idioma ingles'
						/>
					</GButton>
				</div>
			</div>
		</header>
	);
}

export default Menu;
