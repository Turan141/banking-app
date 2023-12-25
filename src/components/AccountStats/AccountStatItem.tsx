import { Paper, Typography } from "@mui/material"
import { REQ_CURRENCY_SYMBOLS } from "../../managers/AccounHomeManager"

export const AccountStatItem: React.FC<{
	active: boolean
	consolidateCurrency: string
	consolidateTotal: number
	title: string
}> = ({ active, consolidateCurrency, consolidateTotal, title }) => {
	const [currencySymbols] = REQ_CURRENCY_SYMBOLS.useRequest()

	return (
		<Paper
			sx={{
				minWidth: 190,
				width: 210,
				height: 120,
				p: 2,
				pb: 0,
				position: "relative",
				borderRadius: "12px",
				backgroundColor: "transparent",
				boxShadow: "none",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				opacity: active ? 1 : 0.2,
				transition: "opacity 0.3s ease-in-out",
			}}
		>
			<Typography
				variant='subtitle1'
				sx={{
					lineHeight: 1.2,
					color: 'contentPrimary.main',
					fontSize: "16px",
					textAlign: "center",
					mb: 1,
					fontWeight: 600
				}}
			>
				{/* todo change this */}
				{title}
			</Typography>

			<Typography
				sx={{
					textAlign: "center",
					color: "contentPrimary.main",
					fontSize: "20px",
					fontWeight: 600
				}}
			>
				{consolidateTotal.toLocaleString("en-US")} {currencySymbols?.[consolidateCurrency]}
			</Typography>
			<Typography
				sx={{
					textAlign: "center",
					color: "contentQuaternary.main",
					fontSize: "12px",
					fontStyle: 'normal',
					fontWeight: 400,
				}}
			>
				Total Balance
			</Typography>
		</Paper>
	)
}
