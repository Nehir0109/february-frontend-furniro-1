import style from "./Footer.module.scss";
import classNames from "classnames";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <h2 className={style.footerTitle}>Furniro.</h2>

                <div className={style.footerSectionContainer}>
                    <div className={style.footerSection}>
                        <h3 className={classNames(style.sectionTitle, style.links)}>LINKS</h3>
                        <div className={style.sections}>
                            <p className={style.section}>Home</p>
                            <p className={style.section}>Shop</p>
                            <p className={style.section}>About</p>
                            <p className={style.section}>Contact</p>
                        </div>
                    </div>

                    <div className={style.footerSection}>
                        <h3 className={classNames(style.sectionTitle, style.help)}>HELP</h3>
                        <div className={style.sections}>
                            <p className={style.section}>Payment Options</p>
                            <p className={style.section}>Returns</p>
                            <p className={style.section}>Privacy Policies</p>
                        </div>
                    </div>

                    <div className={style.footerSection}>
                        <h3 className={classNames(style.sectionTitle, style.locationTitle)}>LOCATION</h3>
                        <p className={style.location}>400 University Drive Suite 200 Coral Gables,<br/> FL 33134 USA</p>
                    </div>

                    <div className={style.footerSection}>
                        <h3 className={classNames(style.sectionTitle, style.newsletter)}>NEWSLETTER</h3>
                        <div className={style.inputSection}>
                            <input className={style.footerInput} type="email" placeholder="Enter Your Email Address"></input>
                            <button className={style.footerBtn}>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>

                <div className={style.copyright}>
                    <p>2023 furnino. All rights reverved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;