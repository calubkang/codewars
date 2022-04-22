function domainName(url) {
    if (url.includes('www.')) {
        return url.split('.')[1]
    } else if (url.includes('://')) {
        return url.slice(url.indexOf('://') + 3, url.indexOf('.'))
    } else {
        return url.split('.')[0]
    }
}