import SocialButton from "../Buttons/SocialButton";
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div>
                    <div>
                        <div>
                            <p>FOOTER</p>
                            <p>contact us, about etc</p>
                        </div>
                        <div class="Social">
                            <SocialButton>1</SocialButton>
                            <SocialButton>2</SocialButton>
                            <SocialButton>3</SocialButton>
                        </div>
                    </div>
                    <hr/>
                    <div  class="copiright">
                        <p>2024 | @ all rights reserved</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
