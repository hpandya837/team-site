

const teamMembers = [
    {
        rank: '1.',
        name: 'Sir Donald Bradman',
        status: 'batsman',
        biography: ' Incredible consistency and high scores, including multiple double centuries.Hails from the magnificent countrey of Australlia',
        image: 'images/superman.png',
    },
    {
        rank: '2.',
        name: 'Sachin Tendulkar',
        status: 'batsman',
        biography: ' The highest run-scorer in both Tests and ODIs, known for his masterful technique and consistency..Hails from the magnificent countrey of India',
        image: 'images/superman.png',
    },
    {
        rank: '3.',
        name: 'Sir Donald Bradman',
        status: 'batsman',
        biography: ' Incredible consistency and high scores, including multiple double centuries.Hails from the magnificent countrey of Australlia',
        image: 'images/superman.png',
    },
    {
        rank: '4.',
        name: 'Sir Donald Bradman',
        status: 'batsman',
        biography: ' Incredible consistency and high scores, including multiple double centuries.Hails from the magnificent countrey of Australlia',
        image: 'images/superman.png',
    },
    {
        rank: '5.',
        name: 'Sir Donald Bradman',
        status: 'batsman',
        biography: ' Incredible consistency and high scores, including multiple double centuries.Hails from the magnificent countrey of Australlia',
        image: 'images/superman.png',
    },
    {
        rank: '6.',
        name: 'Sir Donald Bradman',
        status: 'batsman',
        biography: ' Incredible consistency and high scores, including multiple double centuries.Hails from the magnificent countrey of Australlia',
        image: 'images/superman.png',
    },
   
    
]

function generateTeamCards (){
    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

        //styling card based on status:
        let backgroundColor = ''

        switch(member.status.toLowerCase()){
            case 'batsman':
                backgroundColor = '#758fb6'// orange for forward
                break
            case 'bowler':
                backgroundColor = '#96e1e6'// orange for forward
                break    
  
        }   



        //Create a list of skills with the <li> tag
       
        card.innerHTML = `

        </div><div class = "card h-100">
                <div class = "card-header" style="background-color: ${backgroundColor}">             
                <h3><b>${member.rank}</b> ${member.name} </h3></div>
                <div class = "card-body">
                <img style="width: 200px" src=${member.image} style="justify-content-center">
                    <p><strong>Status:</strong> ${member.status}</p>
                    <p><strong>Powers:</strong>
                        <ul>
                        
                        </ul>

                    <p><strong>Biography:</strong> ${member.biography}</p>
                </div>
            </div>
            
        `
        teamCardsContainer.appendChild(card)
    })
    
}

window.onload = generateTeamCards()