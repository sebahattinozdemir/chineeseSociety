export const config = () => {
    return process.env.REACT_APP_ENVIRONMENT === 'development' ?
        {
            API_URL: 'http://localhost:3000/api',
        }
        :
        {

            API_URL: 'https://sebertech-production.up.railway.app/',

            // API_URL: 'https://sebertech-production.up.railway.app/api', doğru çalışan
            // API_URL: 'https://sebertech.onrender.com/api',
        }
}