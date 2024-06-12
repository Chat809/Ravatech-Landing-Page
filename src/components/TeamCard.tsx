import React from "react"; 
// @ts-ignore
import instaImg from '../IMGS/img_instagram.png'; 
// @ts-ignore
import gitImg from '../IMGS/img_github.png';
// @ts-ignore
import linkedinImg from '../IMGS/img_linkedin.png';

interface TeamCardPropos {
    avatarName: string;
    avatarDescription: string;
    avatarImg: string;
}

const TeamCard: React.FC<TeamCardPropos> = ({avatarName, avatarDescription, avatarImg}) => {
    return (
        <div className="box-card-team">
            <div className="box-img-description-card-team">
                <img className="img-avatar-card-team" src={avatarImg} alt="Imagem de perfil Khalil Salomão" />
                <div className="name-card-team poppins">{avatarName}</div>
                <div className="description-card-team poppins">{avatarDescription}</div>
            </div>
            <div className="box-social-media-card-team">
                <a className="link-icon-card-team" href="https://www.instagram.com/khalilsallomao/">
                    <img className="img-social-media-card-team" src={instaImg} alt="Icone Instagram" />
                </a>
                <a className="link-icon-card-team" href="https://github.com/Chat809">
                    <img className="img-social-media-card-team" src={gitImg} alt="Icone Github" />
                </a>
                <a className="link-icon-card-team" href="https://www.linkedin.com/in/khalil-salom%C3%A3o-955b81238/">
                    <img className="img-social-media-card-team" src={linkedinImg} alt="Icone LinkedIn" />
                </a>
            </div>
        </div>
    );
};

export default TeamCard;