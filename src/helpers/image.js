export const getImageDataUrl = (imgElement, callback) => {
    const file = imgElement.target.files[0];

    const reader = new FileReader();
    reader.addEventListener("load", () => {
        callback(reader.result);
    }, false);
    reader.readAsDataURL(file);
};
