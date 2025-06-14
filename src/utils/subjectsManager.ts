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
      card.className = 'group w-56 mx-auto p-8 px-4 rounded-lg hover:animate-pulsate focus:animate-pulsate';
      card.style.backgroundColor = subject.color;
  
      card.innerHTML = `
        <div class="flex justify-end">
          <img src="${subject.icon}" class="h-16 w-16 ${subject.iconColor}" />
        </div>
        <p class="pt-16 text-2xl font-anonymouspro text-gray-light">${subject.description}</p>
      `;
    console.log(subject.icon)
      container.appendChild(card);
    });
  }