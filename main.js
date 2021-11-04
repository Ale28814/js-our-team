//1 creo l'arrei d'oggetto per i dati dei collaboratori

const collab = [
    {
       name: 'Angela Caroll',
       role: 'Chef Editor',
       profile: 'img/angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        profile: 'img/walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        profile: 'img/angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        profile: 'img/scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        profile: '/barbara-ramos-graphic-designer.jpg',
    },
];

console.table(collab);

//2 stampo a schermo sotto forma di card

//2.1 cerco dove inserire le card

const teamContainer = document.querySelector('.team-container');

//2.2 creo le card e le mostro in HTML

createCollabs(collab, teamContainer);

function createCollabs(collab, teamContainer) {
    for(let i = 0; i < collab.length; i++) {
        const teamCard = collab[i];

        teamContainer.innerHTML +=
        `<div class="team-card">
            <div class="card-image">
               ${teamCard.profile}
            </div>
            <div class="card-text">
                ${teamCard.name}
                <div>
                ${teamCard.role}
                </div>
            </div>
        </div>`;
    }
}

