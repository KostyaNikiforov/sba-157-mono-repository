const timelineSlider = document.getElementById('timeline-slider');
const eventDetailsContainer = document.getElementById('event-details');

let currentEventIndex = 0;

const events = [
    {
        step: "I",
        title: 'Euromaidan (November-December 2013)',
        events: [
            {
                date: 'November 21, 2013',
                description: 'The Azarov government announces the suspension of preparations for signing the Association Agreement with the EU. Protests begin.'
            },
            {
                date: 'November 24, 2013',
                description: 'Mass march "For a European Ukraine!", tens of thousands of people on Maidan.'
            },
            {
                date: 'November 30, 2013',
                description: 'At night, "Berkut" brutally disperses students. The beginning of violent confrontation.'
            }
        ],
        imageUrl: 'images/event-1.jpg'
    },
    {
        step: "II",
        title: 'Beginning of Popular Resistance (December 2013 - January 2014)',
        events: [
            {
                date: 'December 1, 2013',
                description: 'Nationwide protest, "March of Millions". Occupation of the Trade Unions Building.'
            },
            {
                date: 'December 11, 2013',
                description: 'Attempt to storm Maidan, but security forces retreat.'
            },
            {
                date: 'January 16, 2014',
                description: 'Adoption of "dictatorial laws" by the Verkhovna Rada, which limited civil liberties.'
            }
        ],
        imageUrl: 'images/event-2.jpg'
    },
    {
        step: "III",
        title: 'Escalation and "Fire Baptism" (January - February 2014)',
        events: [
            {
                date: 'January 19, 2014',
                description: 'Beginning of fierce clashes on Hrushevskoho Street ("Fire Baptism") after the Vich.'
            },
            {
                date: 'January 22, 2014',
                description: 'First casualties: Serhiy Nigoyan and Mykhailo Zhiznevsky from gunshot wounds.'
            },
            {
                date: 'January 28, 2014',
                description: 'Repeal of "dictatorial laws", resignation of the Azarov government.'
            }
        ],
        imageUrl: 'images/event-3.jpg'
    },
    {
        step: "IV",
        title: 'Climax and Victory (February 2014)',
        events: [
            {
                date: 'February 18, 2014',
                description: '"Peaceful offensive" on the Verkhovna Rada, the beginning of the bloodiest events, burning of the Trade Unions Building.'
            },
            {
                date: 'February 20, 2014',
                description: 'Shooting of protesters by security forces on Instytutska Street. The largest number of casualties ("He'
            },
            {
                date: 'February 21, 2014',
                description: 'Signing of an agreement between Yanukovych and the opposition, but Maidan does not accept the conditions, demanding immediate resignation.'   
            },
            {
                date: 'February 22, 2014',
                description: 'Viktor Yanukovych flees. The Verkhovna Rada adopts a resolution on the self-removal of the president, ending the regime.'
            }
        ],
        imageUrl: 'images/event-4.png'
    }
];

renderEventDetails(currentEventIndex);
timelineSlider.addEventListener('input', () => {
    const eventIndex = timelineSlider.value;
    const event = events[eventIndex];
    
    renderEventDetails(eventIndex);
});

function renderEventDetails(index) {
    const event = events[index];
    eventDetailsContainer.innerHTML = `
        <span class="step">${event.step}</span>
        <h2>${event.title}</h2>
        <img class="image" src="${event.imageUrl}" alt="${event.title}">
        <h3>Key Events:</h3>
        <ul>
            ${event.events.map(e => `<li><strong>${e.date}:</strong> ${e.description}</li>`).join('')}
        </ul>
    `;
}