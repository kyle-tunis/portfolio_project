// Lits of housing options, career choices, and income to be chosen at random.

const housing = ['Mansion', 'Detached Home', 'Homeless', 'Overpriced House', 'Shitty Motel', 'In the Moment', 'Complete and utter dispair', 'Studio Apartment', 'Townhouse', 'Sewer'];

const career = ['Astronaut', 'Barista', 'Professional Athlete', 'Stock Trader', 'Software Developer', 'Doctor', 'Unemployed', 'Caddie', 'Mascot', 'Rail Guy'];

const income = [0, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 10000000000]

const random = Math.floor(Math.random() * 11);

let house;
let job;
let salary;

const randomSelect = () => {
    house = housing[random];
    job = career[random];
    salary = income[random];
};



const mash = name => {
    randomSelect();
    // Welcome Message, runs always.
    console.log(`Good Evening ${name}. My name is MashBot and I will be predicting your future.`);

    //Job Switch Statement
    switch(job) {
        case 'Astronaut':
            console.log(`You will become an ${job}, out of this world!`);
            break;
        case 'Barista':
            console.log(`ROASTED! You will become a ${job}.`);
            break;
        case 'Professional Athlete':
            console.log(`Congratulations on your genetics, you will become a ${job}.`);
            break;
        case 'Stock Trader':
            console.log(`Wolf of Wall Street 2: Electric Boogaloo. You will become a ${job}.`);
            break;
        case 'Software Developer':
            console.log(`NERD. You will become a ${job}.`);
            break;
        case 'Doctor':
            console.log(`Thick thighs, save lives. You will become a ${job}.`);
            break;
        case 'Unemployed':
            console.log(`You will be ${job}, for the rest of your life. Sorry..`);
            break;
        case 'Caddie':
            console.log(`Free GOLF, FOR LIFE! Congratulations on your ${job} gig.`)
            break;
        case 'Mascot':
            console.log(`They never cared about who you were until you put on the mask... You will be a ${job}.`);
            break;
        case 'Rail Guy':
            console.log(`You will be a miserable ${job}. Pay is good, life is not.`);
            break;
    };

    //Salary output
    console.log(`You will earn a salary of $${salary} dollars per year.`)

    //Housing output conditional statement
    if (house === 'Mansion' || house === 'Detached Home' || house === 'Townhouse') {
        console.log(`Congratulations, you are the proud owner of a ${house}!`);

    } else if (house === 'Overpriced House' || house === 'In the Moment' || house === 'Studio Apartment' || house === 'Shitty Motel') {
        console.log(`Accomodations: ${house}.`);

    } else {
        console.log(`Unfortunately you will be living in ${house}. Sorry bout your luck bra.`);
    }

};








mash('Kyle');