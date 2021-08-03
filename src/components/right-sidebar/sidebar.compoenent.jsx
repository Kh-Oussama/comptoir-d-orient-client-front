import React, {useState} from "react";
import iconSet from "../../selection.json";
import IcomoonReact from "icomoon-react";
import {Link} from "react-router-dom";
import styled from "styled-components";

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
    width: ${props => props.clicked ? "25rem" : "7rem"};
`;

const Item = styled.li`

`;

const Text = styled.span`
    width: ${props => props.clicked ? "100%" : "0"};
    margin-left: ${props => props.clicked ? "3rem" : "0"};
`;

const Profile = styled.div`
     width: ${props => props.clicked ? "25rem" : "0"};
    margin-left : ${props => props.clicked ? "17rem" : "0"}
`;

const Details = styled.div`
 display: ${props => props.clicked ? "flex" : "none"};

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
        <>
            <Button clicked={click} className="button" onClick={() => handleClick()}>Click</Button>
            <SidebarContainer className="sidebar-container">
                <Logo className="logo">
                    <img src="/images/logo.png" alt="logo"/>
                </Logo>

                <SlickBar clicked={click} className="slickBar">
                    <Item className="item">
                        <div>
                            <IcomoonReact iconSet={iconSet} size={16} icon="home"/>
                        </div>

                        <Text clicked={click} className="text">Home</Text>
                    </Item>
                    <Item className="item">
                        <div>
                            <IcomoonReact iconSet={iconSet} size={16} icon="users"/>
                        </div>
                        <Text clicked={click} className="text">team</Text>
                    </Item>
                    <Item className="item">
                        <div>
                            <IcomoonReact iconSet={iconSet} size={16} icon="calendar"/>
                        </div>
                        <Text clicked={click} className="text">calender</Text>
                    </Item>
                    <Item className="item">
                        <div>
                            <IcomoonReact iconSet={iconSet} size={16} icon="documents"/>
                        </div>
                        <Text clicked={click} className="text">documents</Text>
                    </Item>
                    <Item className="item">
                        <div>
                            <IcomoonReact iconSet={iconSet} size={16} icon="star"/>
                        </div>
                        <Text clicked={click} className="text">projects</Text>
                    </Item>
                </SlickBar>

                <Profile className="profile" clicked={profileClick}>
                    <img src="https://picsum.photos/200" alt="user logo" onClick={() => handleProfileClick()}/>
                    <div>
                        <Details className='details' clicked={profileClick}>
                            <div className="name">
                                <h4>Jhon Doe</h4>
                                <Link to={''}>
                                    view profile
                                </Link>
                            </div>
                            <Logout className="logout">
                                <i className="fas fa-power-off"></i>
                            </Logout>
                        </Details>


                    </div>
                </Profile>
            </SidebarContainer>
        </>
    )
}

export default SideBar;