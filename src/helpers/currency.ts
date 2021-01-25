const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function formatCurrency(number: number | string): string {
  return currencyFormatter.format(parseFloat(number as any) || 0);
}
