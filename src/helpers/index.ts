export function formatCurrency(qty: number){
    return new Intl.NumberFormat('es-ES', {
        style: 'currency', currency: 'EUR'
    }).format(qty)
}