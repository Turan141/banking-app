import React from "react"
import { Box } from "@mui/material"
import { LogoWithText } from "../LogoWithText"
import { AuthSteps } from "./AuthSteps"
import { AuthBackButton } from "./AuthActionButtons"
import { AuthStatus, S_AUTH_STATUS_DEBUG } from "../../managers/AuthManager"

export const AuthLogin: React.FC = () => {
	return (
		<Box>
			{/*<AuthBackButton />*/}
			<Box
				sx={{
					display: "flex",
					justifyContent: "center"
				}}
			>
				<LogoWithText />
			</Box>
			<Box>
				<AuthSteps />
			</Box>

			<div onClick={() => S_AUTH_STATUS_DEBUG.invoke(AuthStatus.AUTHORIZED)}>DEBUG AUTH COMPLETE</div>
		</Box>
	)
}