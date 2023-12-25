import { Accounts } from "../../assets/icons/Accounts"
import { Card } from "../../assets/icons/Card"
import { Dukascoin } from "../../assets/icons/Dukascoin"
import { Invest } from "../../assets/icons/Invest"
import { ReactNode } from "preact/compat"
import { Bank } from "../../assets/icons/Bank"
import { Chat } from "../../assets/icons/Chat"
import { P2P } from "../../assets/icons/P2P"

export interface IBottomMenu {
	icon?: ReactNode
	title: string
	id: string
	selected?: boolean
}

export const mocked_bottom_menu = [
	{
		icon: <Chat />,
		title: "Chats",
		id: "/chats",
		selected: false
	},
	{
		icon: <P2P />,
		title: "P2P",
		id: "/p2p",
		selected: false
	},
	{
		icon: <Bank />,
		title: "Bank",
		id: "/bank",
		selected: true
	},
	{
		icon: <Invest />,
		title: "Invest",
		id: "/invest",
		selected: false
	},
	{
		icon: <Card />,
		title: "Cards",
		id: "/cards",
		selected: false
	}
]
