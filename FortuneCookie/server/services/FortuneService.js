import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"
import { dbContext } from "../db/DbContext"


class FortuneService {

    async createFortune(fortuneData) {
        const fortune = await dbContext.Fortunes.create(fortuneData)
        return fortune
    }
    async getFortune() {
        const fortune = await dbContext.Fortunes.find()
        return fortune
    }

    async getFortuneById(fortuneId) {
        const fortune = await dbContext.Fortunes.findById(fortuneId)

        if (!fortune) {
            throw new BadRequest('How did you get Here??')
        }

        return fortune
    }

    async deleteFortune(fortuneId) {
        const deleteThis = await this.getFortuneById(fortuneId)

        await deleteThis.remove()
        return deleteThis
    }

}

export const fortuneService = new FortuneService()