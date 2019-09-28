export const getSize = item => new Blob([item]).size * 2;

export const getUsedLocalStorageSize = () => {
    const sizeBytes = Object.keys(window.localStorage).reduce((acc, key) => acc + getSize(localStorage.getItem(key)), 0);

    return (sizeBytes / 1024 / 1024).toFixed(1);
};
