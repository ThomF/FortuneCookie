import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class FortuneService {

    async getFortune() {
        const res = await api.get('api/fortune')
        logger.log(res.data)
    }

}

export const fortuneService = new FortuneService()