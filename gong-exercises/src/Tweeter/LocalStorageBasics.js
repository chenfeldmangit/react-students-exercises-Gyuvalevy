class LocalStorageBasics {

    // append to start
    static appendItems = (key) => {
        return (newItem) => {
            let items = JSON.parse(localStorage.getItem(key));
            items.splice(0, 0, newItem);
            localStorage.setItem(key, JSON.stringify(items));
        }
    };

    static getItems = (key) => {
        return () => JSON.parse(localStorage.getItem(key));
    };

    static replaceItemByKey = (key) => {
        return (item) => {
            let items = JSON.parse(localStorage.getItem(key));
            let itemIndex = items.findIndex(value => value.key === item.key);
            items[itemIndex] = item;
            localStorage.setItem(key, JSON.stringify(items));
        };
    }

    static removeItem = (key) => {
        return (item) => {
            let items = JSON.parse(localStorage.getItem(key));
            let index = items.findIndex(value => value.key === item.key);
            items.splice(index, 1);

            localStorage.setItem(key, JSON.stringify(items));
        };
    }

}

export default LocalStorageBasics;