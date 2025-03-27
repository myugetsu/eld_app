export const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString();
};

export const capitalize = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
