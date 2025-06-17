type Subject = {
    name: string;
    description: string;
    icon: string;
    color: string;
    iconColor: string;
};

export async function loadSubjects() {
    const res = await fetch('data/subjects.json');
    const subjects = await res.json();
    const container = document.getElementById('subjects-container')!;
    container.innerHTML = '';

    subjects.forEach((subject: Subject) => {
        const card = document.createElement('div');
        card.className = 'group snap-center shrink-0 w-72 h-80 p-8 px-4 rounded-lg hover:animate-pulsate focus:animate-pulsate';
        card.style.backgroundColor = subject.color;
        card.dataset.subject = subject.name; // set metadata for event binding

        card.innerHTML = `
        <div class="flex justify-end">
          <img src="${subject.icon}" class="h-16 w-16 ${subject.iconColor}" />
        </div>
        <p class="pt-16 text-2xl font-anonymouspro text-custom-dark">${subject.name}</p>
        <p class="pt-4 text-sm font-anonymouspro text-blue-grey-900">${subject.description}</p>
      `;
        container.appendChild(card);
    });
    
    return subjects;
}


export function bindSubjectCardEvents(callback: (subjectName: string) => void) {
    const container = document.getElementById("subjects-container")!;
    const cards = container.querySelectorAll("div[data-subject]");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const subjectName = card.getAttribute("data-subject");
            if (subjectName) callback(subjectName);
        });
    });
}