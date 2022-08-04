export const menu = (menuId = '', menuName = '', menuPrice = 0, category = 'food') => {
    return {menuId, menuName, menuPrice, category}
}

export const menus = [
    menu('001', 'Nasi Putih', 3000, 'food'),
    menu('002', 'Nasi Merah', 6000, 'food'),
    menu('003', 'Nasi Kuning', 10000, 'food'),
    menu('004', 'Nasi Pecel', 3000, 'food'),
    menu('005', 'Nasi Jagung', 6000, 'food'),
    menu('006', 'Nasi Rames', 10000, 'food'),
    menu('007', 'Nasi Goreng', 3000, 'food'),
    menu('008', 'Nasi Uduk', 6000, 'food'),
    menu('009', 'Nasi Jamur', 10000, 'food'),
    menu('010', 'Nasi Ayam', 3000, 'food'),
    menu('011', 'Nasi Padang', 6000, 'food'),
    menu('012', 'Nasi lontong', 10000, 'food'),
    menu('004', 'Es Jambu', 10000, 'beverage'),
    menu('005', 'Es Kelapa', 10000, 'beverage'),
    menu('006', 'Es Jeruk', 10000, 'beverage'),

];