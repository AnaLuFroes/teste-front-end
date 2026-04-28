export function formatPrice(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function calculateInstallment(
  price: number,
  installments = 2,
): string {
  const value = price / installments;
  return `${installments}x de ${formatPrice(value)} sem juros`;
}

export function calculateOldPrice(price: number): number {
  return price * 1.07;
}
