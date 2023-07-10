        //    ATIVIDADE 1
// const http = require('http')
// const os = require('os')
// const port = 3000
     
//     console.log(os.homedir());
//     console.log(os.freemem());
//     console.log(os.type());
   
//     const objeto = [
//     {nome:'Windows_NT'},
//     {id :'2839826432',},
//     {id :'C:\Users\3°F',},
// ]
  
// const json = JSON.stringify(objeto)
// console.log(json);

// const server = http.createServer((req, res)=>{
//     if (req.url === '/info') {
//         res.setHeader('content-type','application/json')
//         res.end()
//     }

// })


      //    ATIVIDADE 2

// const path = require('path')

// const diretorio = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf'

// console.log(path.dirname(diretorio))
// console.log(path.basename(diretorio))

// path.parse('https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf');




   // ATIVIDADE 3

// const url = require('url')


// const  urlMy = new URL('https://nodejs.org/api/url.html#url_new_url_input_base') 
// console.log(urlMy.href);



  // ATIVIDADE 4 

// const fs = require('fs')

// const arquivo = 'arquivo.txt'

// const arqNovo = 'novo.txt'

// fs.rename(arquivo, arqNovo, (err)=>{
//     if(err){
//       console.log(err)
//       return
//     }

//     console.log(`O arquivo ${arquivo} foi renomeado para ${arqNovo}`)
// })


   //  ATIVIDADE 5
   
//    const os = require('os')

//   console.log(os.cpus());