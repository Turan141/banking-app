import { Box } from "@mui/material";
import { S_PRESENT_SCREEN_ON_MAIN, Screens } from "../Presenter";
import { Deposit } from "../assets/icons/Deposit";
import { Exchange } from "../assets/icons/Exchange";
import { Request } from "../assets/icons/Request";
import { Send } from "../assets/icons/Send";
import { S_AUTH_STATUS_DEBUG, AuthStatus } from "../managers/AuthManager";
import { CircleButton } from "./Buttons/CircleButton";

const currencyButtonsRow = [
  {
    onClick: () => {
      S_PRESENT_SCREEN_ON_MAIN.invoke({
        screen: Screens.DEPOSIT_SCREEN,
        animationDirection: "right",
      });
    },
    icon: <Deposit />,
    title: "Deposit",
  },
  {
    onClick: () => {
      S_PRESENT_SCREEN_ON_MAIN.invoke({
        screen: Screens.ACCOUNT_HOME,
        animationDirection: "right",
      });
    },
    icon: <Exchange />,
    title: "Exchange",
  },
  {
    onClick: () => {
      S_PRESENT_SCREEN_ON_MAIN.invoke({
        screen: Screens.REQUEST_MONEY_SCREEN,
        animationDirection: "right",
      });
    },
    icon: <Request />,
    title: "Request",
  },
  {
    onClick: () => {
      S_AUTH_STATUS_DEBUG.invoke(AuthStatus.UNAUTHORIZED);
    },
    icon: <Send />,
    title: "Send",
  },
];

export const CurrencyButtonsRow = () => {
  return (
    <Box
      display="flex"
      sx={{ p: 3, width: "100%", justifyContent: "space-between" }}
    >
      {currencyButtonsRow.map((button, index) => (
        <CircleButton
          key={index}
          onClick={button.onClick}
          icon={button.icon}
          title={button.title}
        />
      ))}
    </Box>
  );
};
