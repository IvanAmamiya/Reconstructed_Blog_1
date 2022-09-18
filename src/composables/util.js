


export function toast(message,type = "success",dangerouslyUseHTMLString = false)
{
    ElNotification({
        message,
        type, 
        duration:3000,    
        dangerouslyUseHTMLString,
    })

      
}
export function Teiji (Content = "提示内容",title = "" , type = "warning")  {
    return ElMessageBox.confirm(
        Content,
        title,
        {
          confirmButtonText: '是',
          cancelButtonText: '否',
          type
        }
      )
    
  }
