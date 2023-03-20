import { AuthPlugin } from "@bcwdev/auth0provider-client"
import { getCurrentInstance } from "vue"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class FortuneService {

    async getSessionId() {
        const res = await api.get('/api?getSessionID=1')
        logger.log(res.data)
    }
    async getFortune() {
        const res = await api.get('/fortunes/1')
        logger.log(res.data)
    }
}

export const fortuneService = new FortuneService()