import { WalletAccount } from "@txnlab/use-wallet";
import { Wallet } from "@txnlab/use-wallet-react";

export const ALPHA_WALLETS: Wallet[] = [
  {
    id: "casa",
    metadata: {
      name: "Casa",
      icon: "data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M50.0377%2084.9391C45.1873%2084.9391%2040.6241%2084.0155%2036.3481%2082.1683C32.1359%2080.3211%2028.4343%2077.8369%2025.2433%2074.7157C22.116%2071.5309%2019.627%2067.8365%2017.7762%2063.6325C15.9254%2059.3648%2015%2054.8105%2015%2049.9695C15%2045.3197%2015.8616%2040.8927%2017.5847%2036.6888C19.3717%2032.4211%2021.9246%2028.6311%2025.2433%2025.3189C28.5619%2021.9429%2032.3274%2019.3951%2036.5396%2017.6753C40.8156%2015.8918%2045.3149%2015%2050.0377%2015H50.1334C54.8561%2015%2059.2598%2015.8599%2063.3443%2017.5797C67.4927%2019.2995%2071.1305%2021.6563%2074.2577%2024.6501C77.4487%2027.5801%2080.0016%2031.0834%2081.9162%2035.16C83.5275%2038.5372%2084.5512%2042.1399%2084.9873%2045.9681C85.1222%2047.1523%2084.1669%2048.1542%2082.9728%2048.1542H54.0334C52.884%2048.1542%2051.9523%2047.2242%2051.9523%2046.0771V37.6442C51.9523%2037.2005%2051.8071%2036.8292%2051.5167%2036.5303C51.4291%2036.4401%2051.3398%2036.351%2051.2495%2036.2636C50.95%2035.9738%2050.578%2035.8289%2050.1334%2035.8289C49.6228%2035.8289%2049.1761%2036.0199%2048.7932%2036.4021C48.4741%2036.7206%2048.3145%2037.1346%2048.3145%2037.6442V62.2949C48.3145%2062.7391%2048.4358%2063.135%2048.6784%2063.4825C48.7503%2063.5855%2048.8402%2063.6752%2048.9435%2063.7471C49.2916%2063.9892%2049.6883%2064.1102%2050.1334%2064.1102C51.346%2064.1102%2051.9523%2063.5051%2051.9523%2062.2949V53.862C51.9523%2052.7148%2052.884%2051.7849%2054.0334%2051.7849H82.9658C84.1625%2051.7849%2085.1186%2052.7911%2084.978%2053.9772C84.5518%2057.573%2083.595%2061.0144%2082.1077%2064.3013C80.3845%2068.1868%2077.9912%2071.6583%2074.9278%2074.7157C71.6091%2078.028%2067.8118%2080.5758%2063.5358%2082.3594C59.3236%2084.0792%2054.8561%2084.9391%2050.1334%2084.9391H50.0377Z%22%20fill%3D%22%23FF3D00%22%2F%3E%3C%2Fsvg%3E",
    },
    accounts: [],
    activeAccount: null,
    isConnected: false,
    isActive: false,
    connect: function (): Promise<WalletAccount[]> {
      alert("Coming soon");
      throw new Error("Function not implemented.");
    },
    disconnect: function (): Promise<void> {
      throw new Error("Function not implemented.");
    },
    setActive: function (): void {
      throw new Error("Function not implemented.");
    },
    setActiveAccount: function (): void {
      throw new Error("Function not implemented.");
    },
  },
];
