export const calculateMonthlyLoanPayment = (loanAmount: number, loanRate: number, loanTenure: number) => {
    const numberOfPeriodicPayments = loanTenure * 12;
    const periodicInterestRate = loanRate / 100 / 12;
    const loanPayment = periodicInterestRate * loanAmount / ( 1 - (1 / ( (1 + periodicInterestRate) ** numberOfPeriodicPayments )) );
    return loanPayment.toFixed(2);
};