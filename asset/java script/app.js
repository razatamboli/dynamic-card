
let cl = console.log;

const cardbyjavascript = document.getElementById("cardbyjavascript");

let array = [
     {
		 img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
		 content: "Nature 1"
	 },
	 {
		 img: "https://t3.ftcdn.net/jpg/05/68/49/90/360_F_568499083_q9QfafI1PkGJA8QQMIpiTT557xUUJ4Qq.webp",
		 content: "Nature 2"
	 },
	 {
		 img: "https://t3.ftcdn.net/jpg/05/35/47/38/240_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg",
		 content: "Nature 3"
	 },
	 {
		 img: "https://t4.ftcdn.net/jpg/05/47/97/81/240_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
		 content: "Nature 4"
	 },
	 {
		 img: "https://t4.ftcdn.net/jpg/03/75/78/53/240_F_375785397_eeJt3tgod39NkPLpk3jkSHch0PJTo2MI.jpg",
		 content: "Nature 5"
	 },
	 {
		 img: "https://t4.ftcdn.net/jpg/05/55/71/83/240_F_555718315_XAi4cgO4s2uBRshlJZ8wXjAWkptX8023.jpg",
		 content: "Nature 6"
	 }
]

let result = ``;
     
for (var i = 0; i <= array.length - 1; i++){
	result = result +   `<div class="col-md-4 col-sm-6 mb-4">
			                 <div class="card" style="width: 18rem;">
					             <img src="${array[i].img}" height= 300px, class="card-img-top" alt="natures">
                             <div class="card-body">
                                 <p class="card-text">${array[i].content}</p>
                             </div>
						     <div class="card-footer">
						         <a href="#" class="btn btn-primary">Edit</a>
							     <a href="#" class="btn btn-primary">Submit</a>
						     </div>
					         </div>
			             </div>`
}

result += ``;

cardbyjavascript.innerHTML = result;


