import React from 'react' 
import { Menu, Segment } from "semantic-ui-react"
import { NavLink, Link } from "react-router-dom"


const Header = () => {
    return (
        <Segment inverted>
            <Menu inverted secondary>
                <Menu.Item 
                    id="Home"
                    name="Home Page"
                    as={Link}
                    to={{ pathname: "/" }}
                />
                <Menu.Item 
                    id="Cooper-test"
                    name="The Cooper Test"
                    as={NavLink}
                    to={{ pathname: "/cooperTest" }}
                />
                <Menu.Item 
                    id="about-tab"
                    name="About Us"
                    as={NavLink}
                    to={{ pathname: "/about" }}
                />
            </Menu>
        </Segment>
    )
}

export default Header