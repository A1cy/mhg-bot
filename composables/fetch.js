export const useMyFetch = (url, options = {}) => {
    let defaultOptions = {
        headers: {
            Accept: 'application/json'
        },
        baseURL: 'https://mhg-bot.onrender.com' // Hardcoded backend base URL
    };
    // Removed process.server check, as we're now hardcoding the URL
    return useFetch(url, Object.assign(defaultOptions, options));
};

export const useAuthFetch = async (url, options = {}) => {
    const res = await useMyFetch(url, options);
    if (res.error.value && res.error.value.status === 401) {
        await logout(); // Make sure you have a logout function defined or imported
    }
    return res;
};
