const GREETING = 'Howdy Folks!!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
