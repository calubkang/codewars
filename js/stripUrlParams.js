function stripUrlParams(url, paramsToStrip = []) {

    if (!url.includes('?')) {
        return url
    }

    let baseUrl = url.slice(0, url.indexOf('?'));
    let params = [];

    url
        .slice(url.indexOf('?') + 1)
        .split('&')
        .forEach((param, i) => {
            if (!paramsToStrip.includes(param[0])) {
                paramsToStrip.push(param[0]);
                params.push(param)
            }
        })

    return params.length > 0 ? baseUrl + '?' + params.join('&') : baseUrl
}