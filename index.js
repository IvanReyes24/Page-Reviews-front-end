let reviews = [
	{
		name: "Ivan Reyes",
		image : "https://img.freepik.com/free-photo/3d-illustration-boy-with-camera-his-hand_1142-36694.jpg?size=626&ext=jpg&ga=GA1.2.1710840469.1702978049&semt=sph",
		job: "Web Developer",
		reviewText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi veritatis ab at quo quia impedit quasi, assumenda consequatur enim iste dolores debitis sint, qui saepe!"
	}

	,
	{
		name: "Ivan Cayetano",
		image : "https://img.freepik.com/free-photo/3d-rendering-boy-wearing-cap-with-letter-r_1142-40523.jpg?size=626&ext=jpg&ga=GA1.2.1710840469.1702978049&semt=sph",
		job: "Sofware Engineer",
		reviewText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi veritatis ab at quo quia impedit quasi, assumenda consequatur enim iste dolores debitis sint, qui saepe!"
	},

	{
		name: "Vinz Reyes",
		job: "Sofware Engineer",
		image : "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?size=626&ext=jpg&ga=GA1.2.1710840469.1702978049&semt=sph",
		reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestias quidem hic quis excepturi cumque.impedit quasi, assumenda consequatur enim iste dolores debitis sint, qui saepe!"
	},

	{
		name: "Vinz Cayetano",
		image : "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.2.1710840469.1702978049&semt=sph",
		job: "Web Developer",
		reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestias quidem hic quis excepturi cumque. dolor sit amet consectetur adipisicing elit. Vitae molestias quidem hic quis excepturi cumque."
	},
	
	{
		name: "Vinny Reyes",
		image : "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716336000&semt=sph",
		job: "UX/UI Designer",
		reviewText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestias quidem hic quis excepturi cumque.Animi veritatis ab at quo quia impedit quasi, assumenda consequatur enim iste dolores debitis sint, qui saepe!"
	}

]

let img = document.querySelector(".personPic");
let author = document.querySelector(".author");
let job = document.querySelector(".job");
let review_text = document.querySelector(".review-text");
let randomBtn = document.querySelector(".randomBtn")

let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn")

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
	currentReview(currentItem)
})

function currentReview(currentPerson){
	const item = reviews[currentPerson];
	img.src = item.image;
	author.textContent = item.name;
	job.textContent = item.job;
	review_text.textContent = item.reviewText;

}

nextBtn.addEventListener("click", function(){
	currentItem++;
	if(currentItem > reviews.length - 1){
		currentItem = 0;
	}
	currentReview(currentItem)
})

prevBtn.addEventListener("click", function(){
	currentItem--;
	if(currentItem < 0){
		currentItem = 0;
	}
	currentReview(currentItem)
})

randomBtn.addEventListener("click", function(){
	let randomNum = Math.floor(Math.random() * reviews.length - 1)
	currentReview(randomNum)
})