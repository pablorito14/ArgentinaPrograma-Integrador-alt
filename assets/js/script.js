// let menu_open = false 
// const openMenu = () => {

//   if(menu_open === false){
//     document.getElementById('menu').style.display = 'grid';
    
//   } else {
//     document.getElementById('menu').style.display = 'none'
//   }

//   menu_open = !menu_open;
// }

// var constraints = {
//   nombre: {
//     presence: true,
//     length: {
//       minimum: 3,
//       message: "minimo 3 caracteres"
//     }
//   },
//   email: {
//     email:true
//   }
// }

// const sendContact = (event) => {
//   event.preventDefault();

//   const nombre = document.getElementById('nombre');
//   if (validate({nombre:nombre.value},constraints,{format:'flat'})) {
//     console.log(validate({nombre:nombre.value},constraints,{format:'grouped'}))
//     nombre.classList.add('invalid-input')
//     nombre.previousElementSibling.classList.add('invalid-label')
//   }

//   const email = document.getElementById('email');
  
//   if (validate({email:email.value},constraints,{format:'flat'})) {
//     console.log(validate({email:email.value},constraints,{format:'grouped'}))
//     email.classList.add('invalid-input')
//     email.previousElementSibling.classList.add('invalid-label')
//   }

  

//   const textarea = document.getElementsByTagName('textarea')[0];
//   // console.log(textarea);
  
// }


const renderMenu = () => {

  let pathHome = '';
  let pathPages = 'pages';
  if(document.documentElement.baseURI.includes('pages')){
    pathHome = '..';
    pathPages = '.'
  }

  const menu = `
  <nav class="navbar navbar-expand-lg fixed-top bg-dark custom-shadow" data-bs-theme="dark">
    <div class="container">
      <a class="navbar-brand fw-bold" href="${pathHome}">TITULO</a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="fs-1 text-white"><i class="bi bi-list"></i></span>
      </button>

      <div class="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="${pathHome}">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${pathPages}/contact.html">Contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${pathPages}/about.html">Nosotros</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  `;
  
  $('#nav-menu').html(menu)

}




