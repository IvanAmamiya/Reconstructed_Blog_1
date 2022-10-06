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
export function getArticle()
{
    return axios.post("/admin/getArticle");
}
export function getQuestion()
{
    return axios.post("/admin/getQuestion");
}

export function logout()
{
    return axios.post("/admin/logout")
}
