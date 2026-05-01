// Default Data
const defaultData = {
    heroTitle: "Challenge Your Limits",
    heroSubtitle: "The harder the battle, the sweeter the victory.",
    aboutDesc: "Welcome to RDDL Fitness Zone. We offer state-of-the-art machines, experienced trainers, and a motivating environment to help you achieve your fitness goals.",
    aboutImg: "https://scontent.fdac19-1.fna.fbcdn.net/v/t39.30808-1/510406336_122104530668916170_3670593091723106690_n.jpg?stp=dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=3ab345&_nc_ohc=6jNR-_TpY5EQ7kNvwE6H_Et&_nc_ht=scontent.fdac19-1.fna&oh=00_Af6FzcGYZFyWBYu3Y4XOcTuafq9MXId4pV6zjB2v7YEp1g&oe=69FAA939"
};

const defaultReviews = [
    { name: "John Doe", rating: 5, text: "Great equipment and very clean environment. Best gym in Mirpur!" },
    { name: "Sarah Khan", rating: 5, text: "Love the trainers here. They are very helpful." },
    { name: "Ahmed", rating: 4, text: "Good vibe, gets a bit crowded in the evening but overall great." }
];

// Initialize LocalStorage if empty
if (!localStorage.getItem('rddlData')) {
    localStorage.setItem('rddlData', JSON.stringify(defaultData));
}
if (!localStorage.getItem('rddlReviews')) {
    localStorage.setItem('rddlReviews', JSON.stringify(defaultReviews));
}

// Load Data to UI
function loadData() {
    const data = JSON.parse(localStorage.getItem('rddlData'));
    if (document.getElementById('hero-title')) document.getElementById('hero-title').innerText = data.heroTitle;
    if (document.getElementById('hero-subtitle')) document.getElementById('hero-subtitle').innerText = data.heroSubtitle;
    if (document.getElementById('about-desc')) document.getElementById('about-desc').innerText = data.aboutDesc;
    if (document.getElementById('about-img')) document.getElementById('about-img').src = data.aboutImg;

    const reviews = JSON.parse(localStorage.getItem('rddlReviews'));
    const reviewsContainer = document.getElementById('reviews-container');
    if (reviewsContainer) {
        reviewsContainer.innerHTML = '';
        reviews.forEach(r => {
            reviewsContainer.innerHTML += `
                <div class="review-card">
                    <div class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
                    <p>"${r.text}"</p>
                    <br>
                    <strong>- ${r.name}</strong>
                </div>
            `;
        });
    }
}

document.addEventListener('DOMContentLoaded', loadData);
