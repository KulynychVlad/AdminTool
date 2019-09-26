export const getImages = () => {
    return JSON.parse(localStorage.getItem('images')) || [];
};

export const addImage = (image) => {
    const images = getImages();
    const newImages = [...images, image];

    localStorage.setItem('images', JSON.stringify(newImages));
};
