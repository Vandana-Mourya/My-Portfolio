  const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// const form = document.getElementById('myForm');
//     const url = "https://mailcheck.p.rapidapi.com/";
//     const apiKey = '8f27e3de24mshc671e487b0e9e81p1869c6jsn199bd28e265e';
//     const web3FormsUrl = "https://api.web3forms.com/submit";


//     form.addEventListener('submit', (e) => {
//       e.preventDefault(); // prevent the form from submitting normally
//       const email = document.getElementById('email').value;

//       fetch(url, {
//         method: 'GET',
//         headers: {
//           'x-rapidapi-host': 'mailcheck.p.rapidapi.com',
//           'x-rapidapi-key': apiKey,
//         },
//         params: {
//           email: email,
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.valid && !data.block && !data.disposable) {
//            // Send form data to Web3Forms API
//       fetch(web3FormsUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           access_key: '49d76c50-ecbc-420a-8a79-09f9992c7111',
//           name: document.getElementById('fullName').value,
//           email: email,
//           subject: document.getElementById('subject').value,
//           phone: document.getElementById('phone').value,
//           message: document.getElementById('message').value,
//         }),
//       })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Message sent successfully!');
//       })
//       .catch((error) => {
//         console.error('Error sending message:', error);
//       });
//     } else {
//       alert('Email address is not valid or inactive');
//     }
//   })
//   .catch((error) => {
//     console.error('Error verifying email address:', error);
//   });
// });
   
