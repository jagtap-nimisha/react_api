export const getdata= async()=>{
 const responsce=   await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'GET',
    })
    return await responsce.json();
}