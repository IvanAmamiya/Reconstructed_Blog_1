import nprogress from 'nprogress'


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

  export function showFullLoading(){
    nprogress.start()
  }
  export function hideFullLoading(){
    nprogress.done()
  }