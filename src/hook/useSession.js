'use client'
const useSession = () => {
    const login = (userData) => {
        sessionStorage.setItem('logged', true);
        sessionStorage.setItem('userData', JSON.stringify(userData));
    };

    const logout = () => {
        sessionStorage.clear();
    };

    const getUserData = () => {
        const userData = sessionStorage.getItem('userData');
        return userData ? JSON.parse(userData) : null;
    };

    return { login, logout, getUserData };
};

export default useSession;
