document.addEventListener('DOMContentLoaded', function() {
    const skills = [
        "Software Developer.",
        "Digital Forensics Analyst.",
        "Cybersecurity Enthusiast.",
        "Currently at Zone01 Kisumu</a>.",
        "And more...",
    ];

    const skillTextElement = document.querySelector('.skill-text');
    let index = 0;
    let charIndex = 0;
    let currentSkill = '';

    function type() {
        if (charIndex < skills[index].length) {
            currentSkill += skills[index].charAt(charIndex);
            skillTextElement.innerHTML = currentSkill; // Use innerHTML to allow for links
            charIndex++;
            setTimeout(type, 100); // Typing speed
        } else {
            setTimeout(deleteText, 1500); // Wait before deleting
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            currentSkill = currentSkill.substring(0, charIndex - 1);
            skillTextElement.innerHTML = currentSkill; // Update displayed text
            charIndex--;
            setTimeout(deleteText, 50); // Deleting speed
        } else {
            index = (index + 1) % skills.length; // Cycle through skills
            setTimeout(type, 500); // Wait before typing the next skill
        }
    }

    type(); // Start the typing effect
});