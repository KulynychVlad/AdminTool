export const getImageDataUrl = (imgElement, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        callback(reader.result);
    }, false);
    reader.readAsDataURL(imgElement.target.files[0]);
};
