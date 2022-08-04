import { menus } from "./menu_model";

const MenuCRUD = () => {
    const showAll = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(menus);
            }, 2000)
        })
    }
    
    const deleteMenu = async (menuId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const newListMenus = menus.filter(data => data.menuId !== menuId);
                while (menus.length > 0) {
                    menus.pop();
                }
                for (let i = 0; i < newListMenus.length; i++) {
                    menus.push(newListMenus[i])
                }
                resolve(newListMenus)
            }, 1000);
        })
    }
    
    const addNewMenu = async (newMenu) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                menus.push(newMenu);
                resolve(newMenu)
            }, 1000);
        })
    }
    return {
        showAll, addNewMenu, deleteMenu
    }
}

export default MenuCRUD;