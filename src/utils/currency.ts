export function formatCurrency(valueInCents: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(valueInCents / 100);
}

export function calculateInstallment(valueInCents: number, installments: number): number {
    return Math.round(valueInCents / installments);
}