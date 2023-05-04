import { Auth0Provider } from "@bcwdev/auth0provider";
import { fortuneService } from "../services/FortuneService";
import BaseController from "../utils/BaseController";

export class FortuneController extends BaseController {
    constructor() {
        super('api/fortune')
        this.router
            .get('', this.getFortune)
            .get('/:fortuneId', this.getOneFortune)
            .post('', this.createFortune)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .delete('/:fortuneId', this.delete)
    }

    async createFortune(req, res, next) {
        try {
            const fortuneData = req.body
            const create = await fortuneService.createFortune(fortuneData)
            return res.send(create)
        } catch (error) {
            next(error)
        }
    }
    async getFortune(req, res, next) {
        try {
            const fortune = await fortuneService.getFortune()
            return res.send(fortune)
        } catch (error) {
            next(error)
        }
    }
    async getOneFortune(req, res, next) {
        try {
            const id = req.body
            const fortune = await fortuneService.getOneFortune(id)
            return res.send(fortune)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            const fortuneId = req.params.fortuneId
            const del = await fortuneService.deleteFortune(fortuneId)
            return res.send(del)
        } catch (error) {
            next(error)
        }
    }

}