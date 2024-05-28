function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve('API call succeeded!');
            } else {
                reject(new Error('API call failed.'));
            }
        }, 1000);
    });
}
