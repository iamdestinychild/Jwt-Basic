const notFound = (req, res) => {
    res.status(404).json({msg:"ooops nothing here"})
}

module.exports = notFound