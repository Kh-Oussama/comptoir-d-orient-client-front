import React, {useState} from "react";
import iconSet from "../../selection.json";
import IcomoonReact from "icomoon-react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  &::before {
    top: ${props => props.clicked? "3":"2rem"};
    transform: ${props => props.clicked? "rotate(135deg)":"rotate(0)"};
  }

  &::after {
      top: ${props => props.clicked? "2":"3rem"};
     transform: ${props => props.clicked? "rotate(-135deg)":"rotate(0)"};
  }
`;

const SidebarContainer = styled.div`

`;

const Logo = styled.div `

    
`;

const SlickBar = styled.ul `
    width: ${props => props.clicked? "25rem":"5rem"};
    box-shadow: ${props => props.clicked? "-3px -3px 7px rgba(94,104,121, .288), 5px 3px 5px rgba(94,104,121, .288)":"none"};
 

`;

const Item = styled.li`

`;

const Text = styled.span`
    width: ${props => props.clicked? "100%":"0"};
    margin-left: ${props => props.clicked? "3rem":"0"};
`;

const Profile = styled.div`
     width: ${props => props.clicked? "25rem":"0"};
    margin-right : ${props => props.clicked? "17rem":"0"};
        box-shadow: ${props => props.clicked? "-3px -3px 7px rgba(94,104,121, .288), 5px 3px 5px rgba(94,104,121, .288)":"none"};

`;

const Details = styled.div`
 display: ${props => props.clicked? "flex":"none"};

`;

const Name = styled.div`

`;

const Logout = styled.button`

`;

const SideBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [profileClick, setProfileClick] = useState(false);
    const handleProfileClick = () => setProfileClick(!profileClick);

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
                                <IcomoonReact iconSet={iconSet} size={33} icon="list" onClick={() => handleClick()} />

                            </div>
                        </div>
                    </Logo>

                    <SlickBar clicked={click} className="slickBar">
                        <Item className="item item-active">
                            <Text clicked={click} className="text">Home</Text>
                            <div>
                                <IcomoonReact iconSet={iconSet} size={16} icon="home"/>
                            </div>


                        </Item>
                        <Item className="item ">
                            <Text clicked={click} className="text">team</Text>
                            <div>
                                <IcomoonReact iconSet={iconSet} size={16} icon="users"/>
                            </div>
                        </Item>
                        <Item className="item">
                            <Text clicked={click} className="text">calender</Text>
                            <div>
                                <IcomoonReact iconSet={iconSet} size={16} icon="calendar"/>
                            </div>
                        </Item>
                        <Item className="item">
                            <Text clicked={click} className="text">documents</Text>
                            <div>
                                <IcomoonReact iconSet={iconSet} size={16} icon="documents"/>
                            </div>
                        </Item>
                        <Item className="item">
                            <Text clicked={click} className="text">projects</Text>
                            <div>
                                <IcomoonReact iconSet={iconSet} size={16} icon="star"/>
                            </div>
                        </Item>
                    </SlickBar>

                    <Profile className="profile" clicked={profileClick}>
                        <div>
                            <Details className='details' clicked={profileClick}>
                                <Logout className="logout">
                                    <IcomoonReact iconSet={iconSet} onClick={() => handleProfileClick()} size={33} icon="paper-plane"/>
                                </Logout>
                                <div className="name">
                                    <h4>Contact Nous</h4>
                                    <Link to={''}>
                                        Maintenant
                                    </Link>
                                </div>

                            </Details>
                        </div>
                        <img src="/images/msg.png" alt="user logo" onClick={() => handleProfileClick()}/>
                        {/*<div className="contact-button">*/}
                        {/*    <IcomoonReact iconSet={iconSet} onClick={() => handleProfileClick()} size={33} icon="typing"/>*/}
                        {/*</div>*/}
                    </Profile>
                </SidebarContainer>

            </div>
        </div>
    )
}

export default SideBar;