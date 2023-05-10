import { AppState } from "../AppState"
import { fortune } from "../models/fortune"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class FortuneService {

    async getFortune() {
        const res = await api.get('api/fortune')
        logger.log('[FORTUNES]', res.data)
    }

    async getOneFortune() {
        const fortunes = await api.get('api/fortune');

        // Next, randomly select an ID from the list of fortunes
        // const fortunes = AppState.fortunes
        const randomFortuneId = fortunes.data[Math.floor(Math.random() * fortunes.data.length)].id;
        logger.log(randomFortuneId)
        // Finally, make a request to your backend to get the fortune with the selected ID
        // const response = await api.get(`api/fortune/${randomFortuneId}`);
        const response = await api.get(`api/fortune/${randomFortuneId}`);
        logger.log(response)
        AppState.fortune = new fortune(response.data)
    }

}

export const fortuneService = new FortuneService()