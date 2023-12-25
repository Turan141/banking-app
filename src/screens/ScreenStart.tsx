import { BaseScreen } from "./bases/BaseScreen"
import { AccountHead } from "../components/AccountHead"
import { CircleButton } from "../components/Buttons/CircleButton"
import { Box } from "@mui/material"
import BottomMenu from "../components/BottomMenu"
import { S_PRESENT_SCREEN_ON_MAIN, Screens } from "../Presenter"
import { AuthStatus, S_AUTH_STATUS_DEBUG } from "../managers/AuthManager"
import { Deposit } from "../assets/icons/Deposit"
import { Exchange } from "../assets/icons/Exchange"
import { Send } from "../assets/icons/Send"
import { Request } from "../assets/icons/Request"



export const ScreenStart = () => {
	return (
		<BaseScreen head={<AccountHead />} bottom={<BottomMenu />}>
			<Box
				sx={{
					display: "flex",
					padding: 3,
					justifyContent: "space-between"
				}}
			>
				
			</Box>
		</BaseScreen>
	)
}
