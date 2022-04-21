export function dateFormatting (date:number| undefined):string| undefined {
  if (date){
    const formDate = new Date(date)
    let formattedDay = formDate.getDate()<10? `0${formDate.getDate()}` : formDate.getDate()
    let formattedMonth = formDate.getMonth()+1<10? `0${formDate.getMonth()+1}` : formDate.getMonth()+1
    return `${formattedDay+'.'+formattedMonth+'.'+formDate.getFullYear()}`
  }
  return undefined
}