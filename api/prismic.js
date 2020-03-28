import PrismicLib from 'prismic-javascript'
import GaritmicConfig from '../garitmic.config.json'

let frontClient

export const Client = (req = null) => {
    if (!req && frontClient) return frontClient
    else {
        const options = Object.assign({}, req ? { req } : {}, { accessToken: `${process.env.ACCESS_TOKEN}` })
        return PrismicLib.client(GaritmicConfig.apiEndpoint, options)
    }
}
export const Prismic = PrismicLib

export const linkResolver = doc => {
    if (doc.type === 'trend_business') return '/' + doc.uid
    else return '/'
}

