import { BaseProxy } from "./base.proxy"



export class AccountMovementsProxy extends BaseProxy {
    description: string;
    total: string;
    type: string;
}

export class AccountProxy extends BaseProxy {
    agency: string;
    number: string;
    balance?: number;
    movements?: AccountMovementsProxy[];
}