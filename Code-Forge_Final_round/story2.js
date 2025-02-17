// script.js
const story = {
    chapter1: `Chapter 1: The Discovery

On the edge of a small village nestled in a valley, there was an ancient oak tree. Its trunk was gnarled, twisting up into the sky, and its leaves shimmered in every season with a peculiar golden hue. To the villagers, the tree was just a landmark, something they'd pass on their way to the market or when gathering firewood.

But to Aria, a young and curious girl, the tree was more than that. She had always felt a strange pull toward it. Every time she approached, a feeling of warmth spread through her, as if the tree was calling her.

One day, while exploring the woods, Aria found a small, hidden clearing behind the oak. The ground beneath her feet was soft, covered in moss, and in the center of the clearing was a stone pedestal with an intricate pattern carved into it. At first, she thought it was just an old ruin. But as she touched the stone, a sudden light flashed, and a swirling portal appeared before her.

The air around the portal crackled with energy, and Aria stepped back, heart racing. She had heard stories from the village elders about such things — portals that could lead to faraway lands, even other worlds — but she had never thought them to be real. Yet, here it was, glowing before her.

Without thinking, Aria reached out and stepped through the portal.`,

    chapter2: `Chapter 2: The World Beyonds

Aria stumbled out of the portal and onto soft, silken grass that seemed to hum with magic. She stood in awe, taking in the strange world around her. The sky above was a deep purple, filled with floating islands and glowing stars that didn’t seem to belong to the night. Creatures with wings like butterflies, yet the size of horses, fluttered lazily through the air, casting shadows on the ground below.

In the distance, a massive waterfall cascaded down from an island high above, its water sparkling like liquid glass. The air smelled of sweet flowers and fresh rain. Everything was so vivid, so alive — unlike anything Aria had ever seen.

But she didn’t have much time to take it all in before she was approached by a figure. A tall, robed man with glowing eyes, his face hidden beneath a hood. He walked toward her with purpose, and Aria instinctively took a step back.

"You’ve crossed into our world," the man’s voice was deep and echoing, like it came from the earth itself. "But I must warn you — this place is not as safe as it seems."

Aria swallowed her fear and managed to ask, "Where am I?"

The man sighed, "This is the Land of Aetheris. It is a world of balance, where magic flows through everything. But there are forces at work here — forces that seek to upset that balance."

He paused, his glowing eyes narrowing. "You have a role to play, Aria. The portal you came through was not a random event. You’ve been chosen."`,


    chapter3: `Chapter 3: The Final Trial

Days passed in Aetheris, and Aria learned more about the world around her. She befriended the creatures of the land and even learned a bit of magic. But she never forgot the man’s words — that she had a role to play.

One evening, as the twin moons of Aetheris rose high in the sky, the man returned, this time with a group of cloaked figures behind him.

"It’s time," he said, and with a flick of his wrist, the ground before them opened into a vast chasm. A deep, dark void seemed to pulse with dark energy beneath their feet.

"The balance of Aetheris is threatened," he continued, his voice grim. "A great shadow stirs beneath us. The magic of this world is being corrupted, and only someone with the power to resist it can stop it."

The shadow he spoke of was the very heart of the dark force that threatened the land. Aria had to confront it — to prove she was strong enough to restore balance.

With the guidance of the robed man and the creatures she had befriended, Aria ventured into the depths of the chasm. It was a battle like none she had ever imagined. Dark tendrils of magic reached for her, trying to pull her into the void. But Aria, fueled by the lessons she had learned in Aetheris and the belief in herself, called upon the light she felt within her.

With a burst of energy, she cast the shadow back, sealing the dark force and restoring the balance of the land.

When the chasm closed and the world returned to its peaceful state, Aria found herself standing before the portal once again.

"You’ve done it," the robed man said, his voice full of pride. "The Land of Aetheris is safe."

But Aria knew her journey wasn’t over. There were still many more adventures ahead, waiting for her, both in Aetheris and beyond.

And with that, the portal closed behind her, leaving only the echo of a new beginning.`,
};

let currentChapter = 1;
const totalChapters = 3;

const storyText = document.getElementById('story-text');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const chapterIndicator = document.getElementById('chapter-indicator');

function updateStory() {
    storyText.innerHTML = story[`chapter${currentChapter}`];
    chapterIndicator.textContent = `Chapter ${currentChapter}/${totalChapters}`;
    
    prevBtn.disabled = currentChapter === 1;
    nextBtn.disabled = currentChapter === totalChapters;

    // Scroll to top of story
    storyText.scrollTop = 0;

    // Add fade effect
    storyText.style.opacity = 0;
    setTimeout(() => {
        storyText.style.opacity = 1;
    }, 100);
}

prevBtn.addEventListener('click', () => {
    if (currentChapter > 1) {
        currentChapter--;
        updateStory();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentChapter < totalChapters) {
        currentChapter++;
        updateStory();
    }
});

// Initialize the story
updateStory();

// Add some ambient effects
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    
    // Random subtle shadow effect
    setInterval(() => {
        const shadowBlur = 15 + Math.random() * 10;
        container.style.filter = `drop-shadow(0 0 ${shadowBlur}px rgba(187, 0, 0, 0.3))`;
    }, 3000);
});
