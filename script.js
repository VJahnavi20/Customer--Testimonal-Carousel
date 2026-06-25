const testimonials = [
    {
        text: "Excellent service and support!",
        name: "Jahnavi"
    },
    {
        text: "Very user-friendly website.",
        name: "Harini"
    },
    {
        text: "Highly recommended!",
        name: "Lalitha"
    }
];

let index = 0;

const testimonial = document.querySelector(".testimonial");

function showTestimonial() {
    testimonial.innerHTML = `
        <p>"${testimonials[index].text}"</p>
        <h3>- ${testimonials[index].name}</h3>
    `;
}

document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    showTestimonial();
});

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial();
});

showTestimonial();