const env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    const config = require('./config.json');
    const envConfig = config[env];
    Object.entries(envConfig).forEach(([key, value]) => {
        process.env[key] = value;
    });
}
