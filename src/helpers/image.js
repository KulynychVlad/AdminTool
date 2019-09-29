export const getImageDataUrl = (imgElement, callback) => {
    const file = imgElement.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
        callback(reader.result);
    }, false);
    reader.readAsDataURL(file);
};
