export const menu = (menuId = '', menuName = '', menuPrice = 0) => {
    return {menuId, menuName, menuPrice}
}

export const menus = [
    menu('001', 'Nasi Putih', 3000),
    menu('002', 'Nasi Merah', 6000),
    menu('003', 'Nasi Kuning', 10000),
];