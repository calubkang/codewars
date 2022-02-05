function validPhoneNumber(phoneNumber) {
    if (phoneNumber.split(' ').length !== 2 || phoneNumber.split('-').length !== 2) {
        return false
    } else if (phoneNumber.length !== 14) {
        return false
    }
    return true
}