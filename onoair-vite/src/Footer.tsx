import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer-container">
      <IconButton
        onClick={() => {
          navigate("/about");
        }}
      >
        <HelpOutlineIcon />
      </IconButton>
    </div>
  );
}
