import { Link } from "@mui/material";
import React from "react";
import logo from "../../../assets/logos/promptlio-favicon.png";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  HeaderBox,
  Icon,
  Links,
  StyledLink,
  Hover,
  HeaderNameLink,
} from "./Header.styles";
import Auth from "../../../utils/auth";

const Header = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <HeaderBox>
      <Link href="/">
        <Icon src={logo}></Icon>
      </Link>
      <HeaderNameLink>Promptlio</HeaderNameLink>
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
        {loggedIn && (
          <>
            <StyledLink href="/create-post">
              <Hover title="Create Post">
                <EditLocationAltIcon sx={{ fontSize: 50 }} />
              </Hover>
            </StyledLink>
            <StyledLink href="/choose-prompt">
              <Hover title="Select Prompt">
                <SpeakerNotesIcon sx={{ fontSize: 50 }} />
              </Hover>
            </StyledLink>
            <StyledLink>
              <Hover cursor="pointer" title="Log out">
                <LogoutIcon
                  onClick={(e) => {
                    Auth.logout();
                  }}
                  sx={{ fontSize: 50 }}
                />
              </Hover>
            </StyledLink>
          </>
        )}
      </Links>
    </HeaderBox>
  );
};

export default Header;
