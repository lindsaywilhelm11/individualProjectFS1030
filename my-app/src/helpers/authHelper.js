export const parseJWT = token => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return false;
    }
}

const isAuthenticated = () => {
    try {
        return parseJWT(sessionStorage.getItem('token'))
    } catch (error) {
        console.log(error)
        return false
    }
}

export default isAuthenticated