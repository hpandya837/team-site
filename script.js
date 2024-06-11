

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
        name: 'Sir Garfield Sobers',
        status: 'Bowler',
        biography: ' Exceptional all-rounder, averaged 57.78 with the bat and took 235 wickets in Tests..Hails from the magnificent countrey of West Indies',
        image: 'images/superman.png',
    },
    {
        rank: '4.',
        name: 'Jacques Kallis',
        status: 'bowler',
        biography: ' One of the best all-rounders, with over 10,000 runs and 250 wickets in both Tests and ODIs..Hails from the magnificent countrey of South Africa',
        image: 'images/superman.png',
    },
    {
        rank: '5.',
        name: 'Shane Warne',
        status: ' Bowler',
        biography: 'One of the greatest spin bowlers with over 700 Test wickets.Hails from the magnificent countrey of Australlia',
        image: 'images/superman.png',
    },
    {
        rank: '6.',
        name: 'Wasim Akram',
        status: 'bowler',
        biography: ' Regarded as one of the best fast bowlers, particularly known for swing and reverse swing.Hails from the magnificent countrey of Pakistan',
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