var request = require('request')

/**
 * get repos
 */
module.exports = (cb) => {
    request({
        url: 'https://api.github.com/users/green-templates/repos',
        headers: {
            'User-Agent': 'green-cli'
        }
    }, (err, res, body) => {
        if (res.statusCode == 200) {
            var repos = JSON.parse(body)

            repos && cb(repos)

        } else {
            console.log(err)
            console.log(res.statusCode)
            console.log(body)
        }
    })
}
