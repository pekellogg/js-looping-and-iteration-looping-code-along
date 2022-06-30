function writeCards(friends, event) {
    let thanksFriends = []
    for (let i = 0; i < friends.length; i++) {
        thanksFriends.push(`Thank you, ${friends[i]}, for the wonderful ${event} gift!`);
    }
    return thanksFriends;
}

function countDown(number) {
    for(number; number >= 0; number--) {
        console.log(number);
    }
}