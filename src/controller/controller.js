

const GetController = () => {
    const response = () => {
        api.getMethod(function (key, value, res, callback) {
            // controller to interconnect client base url and backend api's 
            console.log("GET controller")
            res.send({ json: res })
        })
    }
}

const PostController = () => {
    const response = () => {
        api.getMethod(function (key, value, res, callback) {
            // controller to interconnect client base url and backend api's 
            console.log("Post controller")
            res.send({ json: res })
        })
    }
}

const GetDepartmentList = () => {
    const response = () => {
        api.getMethod(function (key, value, res, callback) {
            // controller to interconnect client base url and backend api's 
            console.log("Department controller")
            res.send({ json: res })
        })
    }
}

module.exports = {
    GetController,
    PostController,
    GetDepartmentList
}; 