import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class FortuneService {

    async getFortune() {
        const res = await api.get('api/fortune')
        logger.log('[FORTUNES]', res.data)
    }

    async getOneFortune() {
        logger.log("get one fortune")
    }

}

export const fortuneService = new FortuneService()