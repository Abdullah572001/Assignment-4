function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return "Invalid Email"
    }
    const arr = email.split('@')
    const userName = arr[0]
    const domainName = arr[1]
    const notification = userName + ' ' + 'sent you an email from' + ' ' + domainName;

    return notification
}
