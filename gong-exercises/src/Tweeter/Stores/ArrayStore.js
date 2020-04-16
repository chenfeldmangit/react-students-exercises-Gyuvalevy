import {useStore} from "./Store";

export const useArrayStore = (key, defaultValue = []) => {

    const [storedValues, setStoredValues] = useStore(key, defaultValue);

    const appendValue = (newItem) => {
        const values = storedValues.slice();
        values.splice(0, 0, newItem);
        setStoredValues(values);
    };

    const getByKey = (itemKey) => {
        const itemIndex = storedValues.findIndex(value => value.key === itemKey);
        return storedValues[itemIndex];
    };

    const getById = (itemId) => {
        const itemIndex = storedValues.findIndex(value => value.id === itemId);
        return storedValues[itemIndex];
    };

    const replaceItemByKey = (item) => {
        const values = storedValues.slice();
        const itemIndex = values.findIndex(value => value.key === item.key);
        values[itemIndex] = item;
        setStoredValues(values);
    };

    const removeItem = (item) => {
        const values = storedValues.slice();
        const index = values.findIndex(value => value.key === item.key);
        values.splice(index, 1);
        setStoredValues(values);
    };

    return [storedValues, setStoredValues, getByKey, getById, appendValue, replaceItemByKey, removeItem];
};
