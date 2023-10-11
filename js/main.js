
     // contact form
//     async function submitForm(){
//       let name = document.querySelector('#name').value
//       let email = document.querySelector('#email').value
//       let phone = document.querySelector('#phone').value
//       let msg = document.querySelector('#msg').value
//         let city = document.querySelector('#city').value
//       let icecreamchoice = document.querySelector("#cars").value
//       if(icecreamchoice === ""){
//                  return alert("Plz select your value")
//              }
    
//           var formdata = new FormData();
// formdata.append("email", email);
// formdata.append("name", name);
// formdata.append("phone", phone);
// formdata.append("message", msg);
// formdata.append("city", city)
// formdata.append("service", + icecreamchoice)
// formdata.append("type", "4")



// var requestOptions = {
//   method: 'POST',
//   body: formdata,
//   redirect: 'follow'
// };

// fetch("https://www.solar365.net.au/blog_admin/api/enquiry.php", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// }
    
      function submitForm(){
       let name = document.querySelector('#name')
       let email = document.querySelector('#email')
       let phone = document.querySelector('#phone')
      let msg = document.querySelector('#msg')
        let city = document.querySelector('#city')
       let icecreamchoice = document.querySelector("#cars")
       if(icecreamchoice === ""){
                 return alert("Plz select your value")
             }
    
          var formdata = new FormData();
formdata.append("email", email.value);
formdata.append("name", name.value);
formdata.append("phone", phone.value);
formdata.append("message", msg.value);
formdata.append("city", city.value)
formdata.append("proptype", "")
formdata.append("zipcode", "")
formdata.append("state", "")
formdata.append("service", icecreamchoice.value)
formdata.append("type", "4")



var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://www.solar365.net.au/blog_admin/api/enquiry.php", requestOptions)
  .then(response => response.text())
  .then(result => {
      name.value = ""
      email.value = ""
      phone.value = ""
      msg.value = ""
      city.value = ""
      cars.value = ""
    //   zipcode.value = ""
    //   state.value = ""
    //   proptype.value = ""
   
      return window.location.href="./thankyou.html"
  })
  .catch(error => console.log('error', error));
}  
      


    //   counter js
    
      function animate(obj, initVal, lastVal, duration) {
         let startTime = null;

      //get the current timestamp and assign it to the currentTime variable
      let currentTime = Date.now();

      //pass the current timestamp to the step function
      const step = (currentTime ) => {

      //if the start time is null, assign the current time to startTime
      if (!startTime) {
         startTime = currentTime ;
      }

      //calculate the value to be used in calculating the number to be displayed
      const progress = Math.min((currentTime - startTime)/ duration, 1);

      //calculate what to be displayed using the value gotten above
      obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

      //checking to make sure the counter does not exceed the last value (lastVal)
      if (progress < 1) {
         window.requestAnimationFrame(step);
      } else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
         }
      };
      //start animating
         window.requestAnimationFrame(step);
      }
      let text1 = document.getElementById('0101');
      let text2 = document.getElementById('0102');
      let text3 = document.getElementById('0103');
      let text4 = document.getElementById('0104');
      const load = () => {
         animate(text1, 50, 511, 7000);
         animate(text2, 0, 232, 7000);
         animate(text3, 100, 25, 7000);
         animate(text4, 0, 500, 7000);
      }
      
    //   faq section
     const accordianItemHeaders = document.querySelectorAll(
  ".accordian-item-header"
);

accordianItemHeaders.forEach(accordianItemHeader => {
  accordianItemHeader.addEventListener("click", () => {
    const current = document.querySelector(".accordian-item-header.active");

    if (current && current !== accordianItemHeader) {
      current.classList.toggle("active");
      current.nextElementSibling.style.maxHeight = 0;
    }
    accordianItemHeader.classList.toggle("active");

    const accordianItemBody = accordianItemHeader.nextElementSibling;

    if (accordianItemHeader.classList.contains("active")) {
      accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
    } else {
      accordianItemBody.style.maxHeight = 0;
    }
  });
});




    