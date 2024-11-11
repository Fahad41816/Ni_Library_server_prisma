import app from "./app"

async function main(){

    try {
        app.listen(5000, ()=>{
            console.log("Server listening...")
        })
    } catch (error) {
        console.log(error)
    }


} 

main()