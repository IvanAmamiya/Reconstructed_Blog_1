import {ElNotification} from "element-plus"

export function toast(message,type,dangerouslyUseHTMLString = false)
{
    ElNotification({
        message,
        type, 
        duration:3000,    
        dangerouslyUseHTMLString,
    })
}