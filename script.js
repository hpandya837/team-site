//team member data

const teamMembers = [
    {
        name: 'Lionel Messi',
        age: 36,
        activePlayer:true,
        position: 'Forward',
        strengths: 'Ball Control',
        weakness: 'heading abillity',
        skills: ['dribbilling','shooting','passing'],
        bio:'blabbbbbbbebrebrebrebrberberb'
    }
]

function generateTeamCards(){

    const teamcardContainer= document.querySelector('#teamCards')
    
    teamMembers.forEach(member => {

        const card = document.createElement('div')
            card.classList.add('col-md-4')
            card.innerHTML= `<div class="card">
                                <div class="card-header">
                                    ${member.name}
                                </div>
                    </div>`

            teamcardContainer.appendChild(card)
        
    });


}


window.onload = generateTeamCards();

