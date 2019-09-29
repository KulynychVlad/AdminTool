export const getImages = () => {
    return JSON.parse(localStorage.getItem('images')) || [];
};

export const addImage = (image) => {
    const images = getImages();
    const newImages = [...images, image];
    
    localStorage.setItem('images', JSON.stringify(newImages));
};

export const deleteImage = (image) => {
    const images = getImages();
    const newImages = images.filter(item => JSON.parse(item)._id !== image._id);
    
    localStorage.setItem('images', JSON.stringify(newImages));
};

export const editImage = (image) => {
    const images = getImages();
    const newImages = images.map(item => (JSON.parse(item)._id === JSON.parse(image)._id ? image : item));
    
    localStorage.setItem('images', JSON.stringify(newImages));
};
