//1 creo l'arrei d'oggetto per i dati dei collaboratori

const collab = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        profile: "wayne-barnett-founder-ceo.jpg",
     },

    {
       name: 'Angela Caroll',
       role: 'Chef Editor',
       profile: "angela-caroll-chief-editor.jpg",
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        profile: 'walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        profile: 'angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        profile: 'scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        profile: "barbara-ramos-graphic-designer.jpg",
    },
];

console.table(collab);

//2 stampo a schermo sotto forma di card

//2.1 cerco dove inserire le card

const teamContainer = document.querySelector('.team-container');

//2.2 creo le card e le mostro in HTML

createCollabs(collab, teamContainer);



//3 Aggiunta di nuovi membri

const addBtn = document.getElementById('addMemberButton');
const nameInput = document.getElementById('name');
const roleInput = document.getElementById('role');
const imageInput = document.getElementById('image');

addBtn.addEventListener('click', () => {

    const newMember = genNewTeamMember(nameInput, roleInput, imageInput);

    collab.push(newMember);

    createCollabs(collab, teamContainer);


})

function createCollabs(collab, teamContainer) {

    teamContainer.innerHTML = '';

    for(let i = 0; i < collab.length; i++) {
        const teamCard = collab[i];

        teamContainer.innerHTML +=
        `<div class="team-card">
            <div class="card-image">
            <img
                src="img/${teamCard.profile}"
                alt=">${teamCard.name}"
              />
            </div>
            <div class="card-text">
                <h3>${teamCard.name}</h3>
                <div>
                <p>${teamCard.role}</p>
                </div>
            </div>
        </div>`;
    }
}

function genNewTeamMember(name, role, image) {
    const newTeamMember = {
        name: name.value,
        role: role.value,
        profile: image.value,
    };

    name.value = '';
    role.value = '';
    image.value = '';

    return newTeamMember;
}
