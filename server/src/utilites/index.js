const getUnicId = () => {
    const rand = Math.floor(Math.random() * Math.floor(100));
    return +new Date() + rand;
}

module.exports = {
    getUnicId,
};
