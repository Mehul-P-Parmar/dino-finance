import Metamask from "./icons/Metamask";
import HuobiWallet from "./icons/HuobiWallet";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import WalletConnect from "./icons/WalletConnect";

import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "HuobiWallet",
    icon: HuobiWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
