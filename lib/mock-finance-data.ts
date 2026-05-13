export type AccountType = "checking" | "savings" | "credit-card";

export type Account = {
  id: string;
  name: string;
  type: AccountType;
  balance: number;
};

export type RecurringItemType =
  | "income"
  | "expense"
  | "debt-payment"
  | "savings-transfer";

export type RecurringItemFrequency = "weekly" | "biweekly" | "monthly";

export type RecurringItem = {
  id: string;
  name: string;
  category: string;
  amount: number;
  type: RecurringItemType;
  frequency: RecurringItemFrequency;
};

export type Transaction = {
  id: string;
  date: string;
  merchant: string;
  category: string;
  amount: number;
  accountId: string;
};

export type ScenarioChangeType =
  | "increase-savings"
  | "remove-expense"
  | "increase-debt-payment"
  | "add-expense"
  | "reduce-category-spend"
  | "reduce-income";

export type Scenario = {
  id: string;
  name: string;
  description: string;
  changeType: ScenarioChangeType;
  monthlyImpact: number;
};

export const mockAccounts: Account[] = [
  {
    id: "checking-main",
    name: "Main Checking",
    type: "checking",
    balance: 2450,
  },
  {
    id: "savings-emergency",
    name: "Emergency Savings",
    type: "savings",
    balance: 8750,
  },
  {
    id: "credit-card-rewards",
    name: "Rewards Credit Card",
    type: "credit-card",
    balance: -3200,
  },
];

export const mockRecurringItems: RecurringItem[] = [
  {
    id: "paycheck",
    name: "Paycheck",
    category: "Income",
    amount: 2100,
    type: "income",
    frequency: "biweekly",
  },
  {
    id: "rent",
    name: "Rent",
    category: "Housing",
    amount: 1450,
    type: "expense",
    frequency: "monthly",
  },
  {
    id: "utilities",
    name: "Utilities",
    category: "Bills",
    amount: 180,
    type: "expense",
    frequency: "monthly",
  },
  {
    id: "subscriptions",
    name: "Streaming, music, and gym",
    category: "Subscriptions",
    amount: 150,
    type: "expense",
    frequency: "monthly",
  },
  {
    id: "dining",
    name: "Dining out",
    category: "Food",
    amount: 300,
    type: "expense",
    frequency: "monthly",
  },
  {
    id: "credit-card-payment",
    name: "Credit card payment",
    category: "Debt",
    amount: 250,
    type: "debt-payment",
    frequency: "monthly",
  },
  {
    id: "savings-transfer",
    name: "Automatic savings transfer",
    category: "Savings",
    amount: 200,
    type: "savings-transfer",
    frequency: "monthly",
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: "txn-001",
    date: "2026-05-01",
    merchant: "Acme Payroll",
    category: "Income",
    amount: 2100,
    accountId: "checking-main",
  },
  {
    id: "txn-002",
    date: "2026-05-02",
    merchant: "City Apartments",
    category: "Housing",
    amount: -1450,
    accountId: "checking-main",
  },
  {
    id: "txn-003",
    date: "2026-05-03",
    merchant: "Fresh Market",
    category: "Groceries",
    amount: -86.42,
    accountId: "checking-main",
  },
  {
    id: "txn-004",
    date: "2026-05-04",
    merchant: "Blue Bottle Cafe",
    category: "Food",
    amount: -18.75,
    accountId: "checking-main",
  },
  {
    id: "txn-005",
    date: "2026-05-05",
    merchant: "StreamPlus",
    category: "Subscriptions",
    amount: -19.99,
    accountId: "credit-card-rewards",
  },
  {
    id: "txn-006",
    date: "2026-05-06",
    merchant: "Fit Club",
    category: "Subscriptions",
    amount: -59,
    accountId: "credit-card-rewards",
  },
];

export const mockScenarios: Scenario[] = [
  {
    id: "save-300",
    name: "Save $300 more per month",
    description: "Increase automatic savings transfers by $300 each month.",
    changeType: "increase-savings",
    monthlyImpact: 300,
  },
  {
    id: "cancel-subscriptions",
    name: "Cancel subscriptions",
    description: "Remove streaming, music, and gym subscriptions.",
    changeType: "remove-expense",
    monthlyImpact: 150,
  },
  {
    id: "extra-card-payment",
    name: "Pay $500 extra to credit card",
    description: "Send an extra $500 toward credit card debt this month.",
    changeType: "increase-debt-payment",
    monthlyImpact: -500,
  },
  {
    id: "buy-car",
    name: "Buy a car",
    description: "Add a $450 monthly car payment plus estimated ownership costs.",
    changeType: "add-expense",
    monthlyImpact: -450,
  },
  {
    id: "cut-dining",
    name: "Cut dining by 30%",
    description: "Reduce restaurant and weekday eating-out spending.",
    changeType: "reduce-category-spend",
    monthlyImpact: 90,
  },
  {
    id: "income-drop",
    name: "Income drops 20%",
    description: "Model a temporary income reduction for the next two months.",
    changeType: "reduce-income",
    monthlyImpact: -840,
  },
];
