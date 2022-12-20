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
  export function getUrlParams(url){
    let urlStr = url.split('?')[1];
    let paramsArr = urlStr.split('&');
    let obj = {};
    for (let i = 0, len = paramsArr.length; i < len; i++) {
      // 再通过 = 将每一个参数分割为 key:value 的形式
      let arr = paramsArr[i].split('=');
      obj[arr[0]] = arr[1];
    }
    return obj;
  }