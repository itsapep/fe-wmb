import { tables } from "./table_model";

const TableCRUD = () => {
    const showAll = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(tables);
            }, 2000)
        })
    }

    const deleteTable = async (tableId) => {
        return new Promise((resolve, reject) => {
            const newListTables = tables.filter(data => data.tableId !== tableId);
            while (tables.length > 0) {
                tables.pop();
            }
            for (let i = 0; i < newListTables.length; i++) {
                tables.push(newListTables[i])
            }
            resolve(newListTables)
        })
    }
    
    const addNewTable = async (newTable) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                tables.push(newTable);
                resolve(newTable)
            }, 1000);
        })
    }
    return {
        showAll, addNewTable, deleteTable
    }
}

export default TableCRUD;