

export default function swDev()
{
    let URl = `${process.env.PUBLIC_URL}/sw.js`
    console.log(process.env.PUBLIC_URL);
    navigator.serviceWorker.register(URl).then((response)=>{
        console.log("response", response)
    })
}