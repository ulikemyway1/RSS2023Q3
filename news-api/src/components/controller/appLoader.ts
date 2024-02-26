import { assertThatExist } from '../utils/assertThatExist';
import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        assertThatExist<string>(process.env.API_URL);
        super(process.env.API_URL, {
            apiKey: process.env.API_KEY,
        });
    }
}

export default AppLoader;
