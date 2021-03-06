const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=850cfda6651****a72e691481bd16488&query=+ encodeURIComponent(latitude, longitude) +&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.waether_description + '% chance of rain.')
        }
    })
}

module.exports = forecast
