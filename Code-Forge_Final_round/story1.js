// script.js
const story = {
    chapter1: `Chapter 1: The Arrival

It was a cold October evening when I first laid eyes on Ravencrest Manor. The ancient mansion loomed before me, its weathered facade a testament to centuries of history and, as I would soon discover, horror. As the newly appointed caretaker, I was to live here alone, maintaining the property for its mysterious owners who hadn't visited in decades.

The real estate agent's words echoed in my mind as I turned the iron key in the lock: "The salary is excellent, but no one's lasted more than a month." I had dismissed her warning as local superstition, but standing in the shadow of those towering Victorian spires, a shiver ran down my spine that had nothing to do with the autumn chill.

The heavy oak door creaked open, revealing a grand foyer thick with dust and shadows. Crystal chandeliers hung like frozen tears from the ceiling, their once-brilliant facets dulled by years of neglect. A broad staircase swept upward, its bannister carved with intricate scenes that seemed to shift and move in my peripheral vision.

As I stepped inside, the door swung shut behind me with a resounding thud. The sound echoed through the empty halls, stirring up dust motes that danced in the dying sunlight streaming through the grimy windows. I told myself it was just the wind, but deep down, I knew better. The house had welcomed me in, and it had no intention of letting me leave.`,

    chapter2: `Chapter 2: The Whispers

The first few days passed without incident as I settled into my new role. I spent my time cleaning, taking inventory, and learning the mansion's layout. But as the sun set earlier each evening, strange occurrences began to multiply.

It started with whispers. At first, I attributed them to the wind whistling through the old house's many cracks and crevices. But soon, I began to distinguish words, fragments of conversations that made my blood run cold: "She's here... finally here... won't escape... like the others..."

The portraits in the long gallery seemed to follow my movements with their painted eyes. I would enter a room to find furniture rearranged, only to return later and find everything back in its original position. Books would fall from shelves as I passed, always opening to pages filled with dark omens and dire warnings.

One night, while reviewing the mansion's blueprints in the library, I discovered something odd. The measurements didn't add up. There was a space, roughly twenty feet square, unaccounted for between the east wing's second and third floors. When I went to investigate, I found only solid wall where a door should have been. But as I pressed my ear against the wallpaper, I heard something that made my heart stop: the sound of children laughing.`,

    chapter3: `Chapter 3: The Hidden Room

The discovery of the hidden space consumed my thoughts. I spent days searching for an entrance, tapping walls and examining moldings. My obsession grew as the paranormal activity intensified. Objects would fly across rooms of their own accord. Bloody footprints would appear on freshly cleaned floors, leading nowhere. The whispers became louder, more insistent.

It was during one of my searches that I found the diary. Hidden behind a loose panel in the library, its pages yellowed with age, it belonged to Elizabeth Ravencrest, the last known member of the family to live in the mansion. The entries detailed a horrifying story of family secrets, occult rituals, and a terrible price paid for immortality.

According to Elizabeth's writings, the Ravencrests had made a pact with something ancient and evil in 1847. In exchange for eternal life, they had to sacrifice innocent souls to feed their dark benefactor. The hidden room was where they conducted their rituals, and where their victims met their fate.

The final entry, dated 1923, was written in a frantic hand: "They're coming for me. The souls we took – they've broken free. I can hear them scratching at the walls. The door to the room has vanished, but they'll find another way in. God help me, I can hear them calling my name..."`,

    chapter4: `Chapter 4: The Awakening

As I read the last words of Elizabeth's diary, the temperature in the library plummeted. Frost crystallized on the windows, and the flames in the fireplace turned an unnatural blue. The whispers that had haunted me for weeks rose to a deafening chorus.

The walls began to bleed, dark liquid seeping from between the panels. The portraits in their frames twisted and distorted, the faces of the Ravencrest family transforming into grotesque masks of agony. And then, in the corner of my eye, I saw movement – a figure in Victorian dress, her face a hollow void.

Elizabeth Ravencrest stood before me, but she wasn't alone. Behind her, countless shadowy forms materialized – men, women, and children, all bearing the marks of their violent ends. They reached for me with ethereal hands, their touch bringing visions of their final moments in the hidden room.

I ran, but every door I tried led back to the library. The spirits of the Ravencrests' victims had waited a century for someone to find the truth, and they weren't about to let me go. As the phantoms closed in, the wall behind me began to crack, revealing a doorway that hadn't existed moments before – the entrance to the hidden room.`,

    chapter5: `Chapter 5: The Reckoning

The hidden room was exactly as Elizabeth's diary had described it. Arcane symbols covered the walls, their lines drawn in what I now knew was blood. The air was thick with the residue of dark magic and countless tortured souls. In the center stood an altar, its surface stained with the evidence of unspeakable rituals.

As I stepped inside, the spirits followed. But they weren't pursuing me – they were pushing me toward the altar. Through their ethereal touches, they communicated their purpose. I wasn't chosen as a caretaker by chance; I was selected to be their instrument of justice.

The ghosts of the victims surrounded the altar, and in a moment of clarity, I understood what needed to be done. The Ravencrests weren't dead – they were trapped between worlds by their own dark magic, waiting to reclaim their home and continue their horrific practices.

Using the knowledge from Elizabeth's diary and guided by the spirits, I began the ritual that would end the Ravencrests' immortality once and for all. As I spoke the words, the air itself seemed to tear apart. The spirits of the Ravencrest family appeared, clawing at reality as they were dragged into the void they had escaped for so long.

The mansion shuddered as decades of dark magic unraveled. When it was over, the spirits of the victims remained just long enough to show me their gratitude before fading away, finally at peace. The hidden room sealed itself, never to be opened again.

I still live in Ravencrest Manor, but it's different now. The oppressive atmosphere has lifted, though echoes of the past sometimes whisper through its halls. I maintain the property not for the Ravencrests, but for those who died here, ensuring their story is never forgotten. And on quiet nights, when the moon is full, I swear I can hear them singing – not in pain, but in celebration of their final release.

The End.`
};

let currentChapter = 1;
const totalChapters = 5;

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
