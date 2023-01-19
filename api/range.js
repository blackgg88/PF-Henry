module.exports = (req, res, next) => {
    res.header('Content-Range', 'products 0-20/20')
    next()
}