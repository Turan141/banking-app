import { Req } from "badmfck-signal";
import { AccountHomeMockedData } from "../mockup/AccountHomeMock";
import { PaymentSettingsMock } from "../mockup/PaymentSettingsMock";
import { translationsMock } from "../mockup/TranslationsMock";
import { currenciesWithCountryCode } from "../helpers/CurrenciesWithCountryCode";
import { currencySymbols } from "../helpers/CurrencySymbols";

export enum StatsToRender {
  ACCOUNT = "account",
  OTHER_ACCOUNTS = "other-accounts",
  PARTNER_LINKS = "partner-links",
  SAVINGS = "savings",
}

export const REQ_ACCOUNT_GET_HOME: Req<() => void, IAccountHome> = new Req<
  () => void,
  IAccountHome
>();

export const REQ_PAYMENT_SETTINGS_MOCK: Req<void, any> = new Req();
export const REQ_TRANSLATIONS: Req<void, any> = new Req();
export const REQ_CURRENCIES_WITH_COUNTRY_CODE: Req<void, any> = new Req();
export const REQ_CURRENCY_SYMBOLS: Req<void, any> = new Req();
export const REQ_ACCOUNT_STATS: Req<void, any> = new Req();
class AccountHomeManager {
  constructor() {}

  async init() {
    REQ_ACCOUNT_GET_HOME.listener = async () => await this.getAccountHome();
    REQ_PAYMENT_SETTINGS_MOCK.listener = async () =>
      await this.getPaymentSettings();
    REQ_TRANSLATIONS.listener = async () => await this.getTranslations();
    REQ_CURRENCIES_WITH_COUNTRY_CODE.listener = async () =>
      await this.getCurrenciesWithCountryCode();
    REQ_CURRENCY_SYMBOLS.listener = async () => await this.getCurrencySymbols();
    REQ_ACCOUNT_STATS.listener = async () => await this.getAccountStats();
  }

  
  async getAccountStats(): Promise<any> {
    const resp: IAccountHome = await this.getAccountHome();

    const {
      [StatsToRender.ACCOUNT]: account,
      [StatsToRender.OTHER_ACCOUNTS]: otherAccounts,
      [StatsToRender.PARTNER_LINKS]: partnerLinks,
      [StatsToRender.SAVINGS]: savings,
    } = resp;

    const getTotalAmount = (statData: any) =>
      statData?.reduce(
        (acc: number, card: any) =>
          acc + parseInt(card?.CONSOLIDATE_BALANCE || "0"),
        0
      );

    // i dont know exactly if this is correct
    const statObject: IStatObject[] = [
      {
        title: "Currency Accounts",
        totalConsolidateAmount: getTotalAmount(account?.accounts || []),
        consolidateCurrency: account?.accounts?.[0]?.CONSOLIDATE_CURRENCY ?? "",
        currencyStats: account?.accounts || [],
        type: "currency-accounts",
      },
      {
        title: "Other Accounts",
        totalConsolidateAmount: getTotalAmount(otherAccounts || []),
        consolidateCurrency: otherAccounts?.[0]?.CONSOLIDATE_CURRENCY ?? "",
        currencyStats: otherAccounts || [],
        type: "other-accounts",
      },
      {
        title: "Partner Links",
        type: "partner-links",
        totalConsolidateAmount: getTotalAmount(partnerLinks || []),
        consolidateCurrency: partnerLinks?.[0]?.CONSOLIDATE_CURRENCY ?? "",
        currencyStats: otherAccounts || [],
      },
      {
        title: "Savings",
        type: "savings",
        totalConsolidateAmount: getTotalAmount(savings || []),
        consolidateCurrency: savings?.[0]?.CONSOLIDATE_CURRENCY ?? "",
        currencyStats: savings || [],
      },
    ];

    console.log({ statObject });

    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(statObject);
        }, 1000);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getCurrencySymbols(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        resolve(currencySymbols);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getCurrenciesWithCountryCode(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(currenciesWithCountryCode);
        }, 1000);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getTranslations(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(translationsMock);
        }, 1000);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getPaymentSettings(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        const parsedData = JSON.parse(PaymentSettingsMock);
        setTimeout(() => {
          resolve(parsedData);
        }, 1000);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getAccountHome(): Promise<IAccountHome> {
    console.log("GET HOME");
    return new Promise((resolve, reject) => {
      try {
        const parsedData = JSON.parse(AccountHomeMockedData);
        setTimeout(() => {
          resolve(parsedData);
        }, 1000);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default AccountHomeManager;
