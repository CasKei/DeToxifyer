import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                width: "100%",
                position: "absolute",
                bottom: "0",
            }}
        >
            <div className="footer">
                <p className="footer__link">
                    <Link
                        sx={{ display: "flex", alignItems: "center" }}
                        color="inherit"
                        href="https://github.com/Rviewer-Challenges/uGVtM3PdS45c4PdTPLKU"
                        target="blank"
                    >
                        <GitHubIcon
                            fontSize="small"
                            sx={{ paddingInlineEnd: "5px" }}
                        ></GitHubIcon>
                        DeToxifyer
                    </Link>
                </p>

                <div className="footer__text">
                    <p>50.021 Artificial Intelligence Project</p>
                </div>
            </div>
        </Box>
    );
};

export default Footer;