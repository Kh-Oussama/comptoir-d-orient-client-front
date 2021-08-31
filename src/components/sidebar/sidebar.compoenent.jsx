import React, {useState} from "react";
import iconSet from "../../selection.json";
import IcomoonReact from "icomoon-react";
import {Link as LinkScroll} from 'react-scroll';
import styled from "styled-components";
import {createStructuredSelector} from "reselect";
import {selectCurrentSection} from "../../redux/design-utilites/design-utilities.selectors";
import {connect} from "react-redux";
import {withRouter ,Link} from "react-router-dom";


const Button = styled.button`
  &::before {
    top: ${props => props.clicked ? "3" : "2rem"};
    transform: ${props => props.clicked ? "rotate(135deg)" : "rotate(0)"};
  }

  &::after {
      top: ${props => props.clicked ? "2" : "3rem"};
     transform: ${props => props.clicked ? "rotate(-135deg)" : "rotate(0)"};
  }
`;

const SidebarContainer = styled.div`

`;

const Logo = styled.div`

    
`;

const SlickBar = styled.ul`
    width: ${props => props.clicked ? "30rem" : "5rem"};
    box-shadow: ${props => props.clicked ? "-3px -3px 7px rgba(94,104,121, .288), 5px 3px 5px rgba(94,104,121, .288)" : "none"};
    background-color: ${props => props.clicked ? "rgba(0, 0, 0, 0.7)" : "transparent"};


`;

const Item = styled.li`

`;

const Text = styled.span`
    width: ${props => props.clicked ? "100%" : "0"};
    margin-left: ${props => props.clicked ? "3rem" : "0"};
`;

const Profile = styled.div`
     width: ${props => props.clicked ? "25rem" : "0"};
    margin-right : ${props => props.clicked ? "17rem" : "0"};
        box-shadow: ${props => props.clicked ? "-3px -3px 7px rgba(94,104,121, .288), 5px 3px 5px rgba(94,104,121, .288)" : "none"};
      background-color: ${props => props.clicked ? "rgba(0, 0, 0, 0.7)" : "transparent"};
`;

const Details = styled.div`
 display: ${props => props.clicked ? "flex" : "none"};

`;

const Name = styled.div`

`;

const Logout = styled.button`

`;

const SideBar = ({current_section,history}) => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [profileClick, setProfileClick] = useState(false);
    const handleProfileClick = () => {
        setProfileClick(!profileClick);

    };

    return (
        <div className="sidebar-block">
            <div className="btn-block">
                {/*<div className="btn">*/}
                {/*    <IcomoonReact iconSet={iconSet} size={33} icon="list" onClick={() => handleClick()} />*/}

                {/*</div>*/}
            </div>
            <div className="sidebar-content">
                <SidebarContainer className="sidebar-container">
                    <Logo className="logo">
                        <div className="btn-block">
                            <div className="btn">
                                <IcomoonReact iconSet={iconSet} size={33} icon="list" onClick={() => handleClick()}/>
                            </div>
                        </div>
                    </Logo>

                    <SlickBar clicked={click} className="slickBar">

                        <LinkScroll to={'header'} smooth={true} duration={1000}>

                            <Item className={`item ${current_section === 'header' ? 'item-active' : null}`}>
                                <Text clicked={click} className="text">Accueil</Text>
                                <div>
                                    <IcomoonReact iconSet={iconSet} size={16} icon="home"/>
                                </div>


                            </Item>
                        </LinkScroll>
                        <LinkScroll to={'rProducts'} smooth={true} duration={1000}>

                            <Item className={`item ${current_section === 'rProducts' ? 'item-active' : null}`}>
                                <Text clicked={click} className="text">Recommandations</Text>
                                <div>
                                    <IcomoonReact iconSet={iconSet} size={16} icon="price-tag"/>
                                </div>
                            </Item>
                        </LinkScroll>

                        <LinkScroll to={'gallery'} smooth={true} duration={1000}>

                            <Item className={`item ${current_section === 'gallery' ? 'item-active' : null}`}>
                                <Text clicked={click} className="text">Galerie</Text>
                                <div>
                                    <IcomoonReact iconSet={iconSet} size={16} icon="documents"/>
                                </div>
                            </Item>
                        </LinkScroll>

                        <LinkScroll to={'address'} smooth={true} duration={1000}>

                            <Item className={`item ${current_section === 'address' ? 'item-active' : null}`}>
                                <Text clicked={click} className="text">Adresse Social</Text>
                                <div>
                                    <IcomoonReact iconSet={iconSet} size={16} icon="map"/>
                                </div>
                            </Item>
                        </LinkScroll>
                        {/*<LinkScroll to={'offre'} smooth={true} duration={1000}>*/}

                        {/*    <Item className={`item ${current_section === 'catalogue' ? 'item-active' : null}`}>*/}
                        {/*        <Text clicked={click} className="text">catalogue</Text>*/}
                        {/*        <div>*/}
                        {/*            <IcomoonReact iconSet={iconSet} size={16} icon="open-book"/>*/}
                        {/*        </div>*/}
                        {/*    </Item>*/}
                        {/*</LinkScroll>*/}
                        {/*<LinkScroll to={'stories'} smooth={true} duration={1000}>*/}
                        {/*    <Item className={`item ${current_section === 'stories' ? 'item-active' : null}`}>*/}

                        {/*        <Text clicked={click} className="text">stories</Text>*/}
                        {/*        <div>*/}
                        {/*            <IcomoonReact iconSet={iconSet} size={16} icon="shield"/>*/}
                        {/*        </div>*/}

                        {/*    </Item>*/}
                        {/*</LinkScroll>*/}




                    </SlickBar>

                    <Profile className="profile" clicked={profileClick} style={{backgroundColor: 'rgba(#000, 0.2)'}}>
                        <div>
                            <Details className='details' clicked={profileClick}>
                                <Logout className="logout">
                                    <IcomoonReact iconSet={iconSet} onClick={() => history.push("/contact_us")} size={33}
                                                  icon="paper-plane"/>
                                </Logout>
                                <div className="name">
                                    <h4>Contact Nous</h4>
                                    <Link to={'/contact_us'}>
                                        Maintenant
                                    </Link>
                                </div>

                            </Details>
                        </div>
                        <img src="https://picsum.photos/200" alt="user logo" onClick={() => handleProfileClick()}/>
                        {/*<div className="contact-button">*/}
                        {/*    <IcomoonReact iconSet={iconSet} onClick={() => handleProfileClick()} size={33} icon="typing"/>*/}
                        {/*</div>*/}
                    </Profile>
                </SidebarContainer>

            </div>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    current_section: selectCurrentSection,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, null)(withRouter(SideBar));
