// import { useMemo } from "react";
// import { useMutation } from "@apollo/client";



// export default function LoginLogic(){
//     const [Login, loading, error] = useMutation(query)

//     const query = useMemo(() => gql`
//     mutation Login($input: LoginInput!) {
//         login(input: $input) {
//                 token
//             }
//     }
// `, [])

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const form = new FormData(e.target)
//         const data = Object.fromEntries(form)
//         const {userName, password} = data

//         // username es un email?
//         const isEmail = /\S+@\S+\.\S+/.test(userName)

//         let token = null
//         if(isEmail){
//             console.log('es un email')
//             token = await Login({
//                 variables: {
//                     input: {
//                         email: userName,
//                         password
//                     }
//                 }
//             })
//         }else{
//             console.log('es un username')
//             token = await Login({
//                 variables: {
//                     input: {
//                         userName,
//                         password
//                     }
//                 }
//             })


//         }

//         if(token) setToken(token.data.login.token)
//         console.log(token?.data?.login?.token)
//         console.log(error)
//     }

//     return {handleSubmit}

// }