// script.js
const story = {
    chapter1: `Chapter 1: The Vanishing Flame

Long ago, in a world where magic thrived, dragons roamed freely in the skies, their fiery breath lighting up the darkened skies. They were powerful, wise, and noble beings who maintained the balance between nature and the elements. Among them was a dragon named Eryx, the last of his kind.

Eryx was a magnificent creature, with scales that shimmered like molten gold and wings that could block out the sun. Yet, for all his grandeur, he felt a deep loneliness in his heart. The other dragons had vanished, one by one, leaving no trace behind. Some said they had been hunted by humans, others claimed they had disappeared into a hidden realm, but Eryx knew the truth: the dragons had faded away, leaving him to carry their legacy alone.

One cold winter's night, while soaring high above the mountains, Eryx felt a strange pull deep within him. The stars twinkled brighter than ever, as if they were calling him to something greater. Driven by an ancient instinct, he set off toward the east, where an old legend spoke of a forgotten land where dragons once roamed in abundance.`,

    chapter2: `Chapter 2: The Lost City

After days of travel, Eryx found himself standing before the entrance of a vast, overgrown jungle. The air was thick with mystery, and the trees towered above him like ancient guardians. With a hesitant breath, Eryx entered, following the path that seemed to beckon him deeper into the forest.

Through the dense foliage, Eryx soon discovered an ancient stone structure, half-swallowed by the earth. The stone was inscribed with symbols and runes he had never seen before. It was a city, forgotten by time, its walls telling stories of a civilization that had worshipped dragons as gods.

Eryx wandered through the ruins, marveling at the intricate carvings of dragons flying across the walls. As he ventured deeper into the heart of the city, he stumbled upon a hidden chamber. Inside, a faint, glowing ember flickered at the center of an altar. It was the last remnant of the dragon flame—a power so pure that only the greatest of dragons could possess it.

Realizing the ember was tied to the essence of all dragons, Eryx knew that it was his destiny to protect it. But as he stepped forward to claim it, a shadowy figure emerged from the darkness.`,

    chapter3: `Chapter 3: The Shadow of despair

The figure before him was not human, but a twisted form of magic—dark and formless, a being born from the very fear that dragons had once fought against. It was the Shadow of Despair, a creature that had been lurking in the forgotten city for centuries, feeding on the sorrow and loneliness of the world.

"You seek the last flame, but it is not yours to claim," the shadow hissed, its voice like a thousand whispers. "The dragons are gone, and so must you be. The world no longer has a place for creatures like you."

Eryx's heart grew heavy, but he stood his ground. "The dragons may be gone, but their legacy lives on through me. I will not let the last flame extinguish."

With a roar that shook the very walls of the city, Eryx unleashed a torrent of fire, the last dragon flame roaring to life. The battle between light and darkness raged through the ruins, the embers flickering and flaring, illuminating the ancient stone carvings.

But the Shadow of Despair was relentless, feeding off the sorrow Eryx had carried for so long. With each strike, Eryx felt weaker, his energy draining away. Just as it seemed that the last of the dragons would fall to darkness, Eryx had a vision—of all the dragons, past and present, standing with him, their spirits entwining with his own.`,

   chapter4: `Chapter 4: The Rebirth of Flame
Eryx understood then that the last dragon flame was not meant to burn alone. It was a symbol of unity, of the bond between all dragons and the world they had protected. With newfound strength, Eryx called upon the memories of his fallen kin, their spirits rising from the ashes, their power flowing through him.

The Shadow of Despair recoiled in fear, its form beginning to crack and crumble as the light of the dragons filled the room. With a final, triumphant roar, Eryx unleashed a blast of pure, radiant fire that consumed the darkness, banishing it forever.

As the dust settled and the ruins grew quiet, Eryx stood alone in the heart of the forgotten city, but he was no longer lonely. The spirit of the dragons lived on within him, and the last dragon flame burned brighter than ever, a beacon of hope for a world in need of healing.

Eryx knew that while the dragons may have vanished from the skies, their legacy would never be forgotten. He had become the guardian of their flame, the last of his kind—but no longer alone. The rebirth of the flame was just the beginning of a new era for the world, one where dragons and humans could once again live in harmony.`,

};

let currentChapter = 1;
const totalChapters = 4;

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
