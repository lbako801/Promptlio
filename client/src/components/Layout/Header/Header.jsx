import { Link } from "@mui/material";
import React from "react";
import logo from "../../../assets/logos/promptlio-favicon.png";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { HeaderBox, Icon, Links, StyledLink, Hover } from "./Header.styles";

const Header = () => {
  const loggedIn = false;

  return (
    <HeaderBox>
      <Link href="/">
        <Icon src={logo}></Icon>
      </Link>
      <Links>
        {!loggedIn && (
          <>
            <StyledLink href="/login">
              <Hover title="Login">
                <LoginIcon sx={{ fontSize: 50 }} />
              </Hover>
            </StyledLink>
            <StyledLink href="/signup">
              <Hover title="Sign Up">
                <PersonAddIcon sx={{ fontSize: 50 }} />
              </Hover>
            </StyledLink>
          </>
        )}
      </Links>
    </HeaderBox>
  );
};

export default Header;
