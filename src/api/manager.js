import axios from '../axios'
export function login(username,password)
{
    return axios.post("/admin/login",{
        username,
        password
    })
}
export function getinfo()
{
    return axios.post("/admin/getinfo");
}
export function getArticle(pageNum,pageSize)
{
    return axios.get("/admin/getArticle",{params:{pageNum,pageSize}});
}
export function getQuestion()
{
    console.log("getQ")
    return axios.post("/admin/getQuestion");
}

export function logout()
{
    return axios.post("/admin/logout")
}
export function getArticleDetail()
{
    return axios.post('admin/getArticleDetail');
}
