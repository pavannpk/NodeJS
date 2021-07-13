let generateMobiles = (startNumber) => {
    let mobiles = [];
    for(let i = 0; i<10000; i++){
        let lastNumber = Math.floor(Math.random() * 1000000);
        let mobileNumber = startNumber + lastNumber;
        if(mobileNumber.length === 10){
            mobiles.push(mobileNumber);
        }
     }
    return mobiles;
};

module.exports = {
    generateMobiles
};
