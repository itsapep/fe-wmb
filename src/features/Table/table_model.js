export const table = (tableId = '', tableNumber = '', tableStatus = '') => {
    return {tableId, tableNumber, tableStatus}
}

export const tables = [
    table('001', '001', 'Available'),
    table('002', '002', 'Unavailable'),
    table('003', '003', 'Available'),
]
