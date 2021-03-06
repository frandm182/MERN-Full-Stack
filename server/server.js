import mongoose from 'mongoose';
import appConfig from '../config/appConfig';
import app from './express';

const mongoConfig = {
    autoIndex: false,
    useNewUrlParser: true,
  };
mongoose.Promise = global.Promise;
mongoose.connect(appConfig.mongoUri, { ...mongoConfig });

mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${appConfig.mongoUri}`);
})

app.listen(appConfig.port, err => {
    if (err) {
        console.log(err);
    }
    console.info('Server started on port %s', appConfig.port);
})