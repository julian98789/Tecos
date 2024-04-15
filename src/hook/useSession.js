const useSession = () => {
    if (typeof window !== 'undefined') {
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
    } else {
        // Si se está ejecutando en el lado del servidor, retornar un objeto vacío
        return {};
    }
};

export default useSession;
