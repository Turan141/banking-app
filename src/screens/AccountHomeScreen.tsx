import { BaseScreen } from "../screens/bases/BaseScreen"
import { AccountHead } from "../components/AccountHead"
import { AccountsList } from "../components/AccountsList"
import { Box } from "@mui/material"
import { REQ_ACCOUNT_GET_HOME } from "../managers/AccounHomeManager"
import BottomMenu from "../components/BottomMenu"
import { useState } from "preact/hooks"
import AccountCards from "../components/AccountStats/AccountStats"
import AccountsBalanceStat from "../components/AccountsBalanceStat"
import { Loading } from "../components/Loading"
import { CurrencyButtonsRow } from "../components/ButtonLayouts"

export const AccountHomeScreen = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const [accountHomeData] = REQ_ACCOUNT_GET_HOME.useRequest(() => setIsLoading(false))

	console.log(accountHomeData)

	if (isLoading) return <Loading/>

	return (
    <BaseScreen head={<AccountHead />} bottom={<BottomMenu />}>
      <Box sx={{ backgroundColor: "bgRear.main" }}>
        <Box sx={{ pt: 1, pb: 1, display: "flex", flexDirection: "column" }}>
          <Box>
            <AccountCards />
            <AccountsBalanceStat />
          </Box>
          <Box>{/* TODO Icon Buttons */}</Box>
          <Box>{/* TODO Hide Balance */}</Box>
        </Box>
      </Box>
      <Box>
        <CurrencyButtonsRow/>
        <AccountsList />
      </Box>
    </BaseScreen>
  );
}
