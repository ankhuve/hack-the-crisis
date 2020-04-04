const uuid = require('uuid');

function fakeApiCall(responseTimeMs) {
    return new Promise(resolve => setTimeout(resolve, responseTimeMs));
}

function generateRandomPersonalNumber() {
    const earliestDate = new Date(1900, 0, 1);
    const latestDate = new Date();

    const randomDate = new Date(earliestDate.getTime() + Math.random() * (latestDate.getTime() - earliestDate
    .getTime()));
    const year = randomDate.getFullYear().toString();
    const month = ('0' + (randomDate.getMonth() + 1).toString()).slice(-2);
    const day = ('0' + randomDate.getDate().toString()).slice(-2);
    const last4 = '0000';

    return year + month + day + last4;
}

function getRandomValueFromList(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function generateRandomName() {
    const firstNames = [
        "Noah", "Liam", "William", "Mason", "James", "Benjamin", "Jacob", "Michael", "Elijah", "Ethan", "Alexander",
        "Oliver", "Daniel", "Lucas", "Matthew", "Aiden", "Jackson", "Logan", "David", "Joseph", "Samuel", "Henry",
        "Owen", "Sebastian", "Gabriel", "Carter", "Jayden", "John", "Luke", "Anthony", "Isaac", "Dylan", "Wyatt",
        "Andrew", "Joshua", "Christopher", "Grayson", "Jack", "Julian", "Ryan", "Jaxon", "Levi", "Nathan", "Caleb",
        "Hunter", "Christian", "Isaiah", "Thomas", "Aaron", "Lincoln", "Charles", "Eli", "Landon", "Connor",
        "Josiah", "Jonathan", "Cameron", "Jeremiah", "Mateo", "Adrian", "Hudson", "Robert", "Nicholas", "Brayden",
        "Nolan", "Easton", "Jordan", "Colton", "Evan", "Angel", "Asher", "Dominic", "Austin", "Leo", "Adam", "Jace",
        "Jose", "Ian", "Cooper", "Gavin", "Carson", "Jaxson", "Theodore", "Jason", "Ezra", "Chase", "Parker",
        "Xavier", "Kevin", "Zachary", "Tyler", "Ayden", "Elias", "Bryson", "Leonardo", "Greyson", "Sawyer", "Roman",
        "Brandon", "Bentley", "Kayden", "Ryder", "Nathaniel", "Vincent", "Miles", "Santiago", "Harrison", "Tristan",
        "Declan", "Cole", "Maxwell", "Luis", "Justin", "Everett", "Micah", "Axel", "Wesley", "Max", "Silas",
        "Weston", "Ezekiel", "Juan", "Damian", "Camden", "George", "Braxton", "Blake", "Jameson", "Diego", "Carlos",
        "Ivan", "Kingston", "Ashton", "Jesus", "Brody", "Emmett", "Abel", "Jayce", "Maverick", "Bennett",
        "Giovanni", "Eric", "Maddox", "Kaiden", "Kai", "Bryce", "Alex", "Calvin", "Ryker", "Jonah", "Luca", "King",
        "Timothy", "Alan", "Brantley", "Malachi", "Emmanuel", "Abraham", "Antonio", "Richard", "Jude", "Miguel",
        "Edward", "Victor", "Amir", "Joel", "Steven", "Matteo", "Hayden", "Patrick", "Grant", "Preston", "Tucker",
        "Jesse", "Finn", "Oscar", "Kaleb", "Gael", "Graham", "Elliot", "Alejandro", "Rowan", "Marcus", "Jeremy",
        "Zayden", "Karter", "Beau", "Bryan", "Maximus", "Aidan", "Avery", "Elliott", "August", "Nicolas", "Mark",
        "Colin", "Waylon", "Bradley", "Kyle", "Kaden", "Xander", "Caden", "Paxton", "Brian", "Dean", "Paul",
        "Peter", "Kenneth", "Jasper", "Lorenzo", "Zane", "Zion", "Beckett", "River", "Jax", "Andres", "Dawson",
        "Messiah", "Jaden", "Rhett", "Brady", "Lukas", "Omar", "Jorge", "Riley", "Derek", "Charlie", "Emiliano",
        "Griffin", "Myles", "Brooks", "Israel", "Sean", "Judah", "Iker", "Javier", "Erick", "Tanner", "Corbin",
        "Adriel", "Jase", "Jake", "Simon", "Cayden", "Knox", "Tobias", "Felix", "Milo", "Jayceon", "Gunner",
        "Francisco", "Kameron", "Cash", "Remington", "Reid", "Cody", "Martin", "Andre", "Rylan", "Maximiliano",
        "Zander", "Archer", "Barrett", "Killian", "Stephen", "Clayton", "Thiago", "Spencer", "Amari", "Josue",
        "Holden", "Emilio", "Arthur", "Chance", "Eduardo", "Leon", "Travis", "Ricardo", "Damien", "Manuel", "Gage",
        "Keegan", "Titus", "Raymond", "Kyrie", "Nash", "Finley", "Fernando", "Louis", "Peyton", "Rafael", "Phoenix",
        "Jaiden", "Lane", "Dallas", "Emerson", "Cristian", "Collin", "Kyler", "Devin", "Jeffrey", "Walter",
        "Anderson", "Cesar", "Mario", "Donovan", "Seth", "Garrett", "Enzo", "Conner", "Legend", "Caiden", "Beckham",
        "Jett", "Ronan", "Troy", "Karson", "Edwin", "Hector", "Cohen", "Ali", "Trevor", "Conor", "Orion", "Shane",
        "Andy", "Marco", "Walker", "Angelo", "Quinn", "Dalton", "Sergio", "Ace", "Tyson", "Johnny", "Dominick",
        "Colt", "Johnathan", "Gideon", "Julius", "Cruz", "Edgar", "Prince", "Dante", "Marshall", "Ellis", "Joaquin",
        "Major", "Arlo", "Alexis", "Reed", "Muhammad", "Frank", "Theo", "Shawn", "Erik", "Grady", "Nehemiah",
        "Daxton", "Atticus", "Gregory", "Matias", "Bodhi", "Emanuel", "Jensen", "Kash", "Romeo", "Desmond",
        "Solomon", "Allen", "Jaylen", "Leonel", "Roberto", "Pedro", "Kason", "Fabian", "Clark", "Dakota", "Abram",
        "Noel", "Kayson", "Malik", "Odin", "Jared", "Warren", "Kendrick", "Rory", "Jonas", "Adan", "Ibrahim",
        "Trenton", "Finnegan", "Landen", "Adonis", "Jay", "Ruben", "Drew", "Gunnar", "Ismael", "Jaxton", "Kane",
        "Hendrix", "Atlas", "Pablo", "Zaiden", "Wade", "Russell", "Cade", "Sullivan", "Malcolm", "Kade", "Harvey",
        "Princeton", "Skyler", "Corey", "Esteban", "Leland", "Derrick", "Ari", "Kamden", "Zayn", "Porter",
        "Franklin", "Raiden", "Braylon", "Ronald", "Cyrus", "Benson", "Malakai", "Hugo", "Marcos", "Maximilian",
        "Hayes", "Philip", "Lawson", "Phillip", "Bruce", "Braylen", "Zachariah", "Damon", "Dexter", "Enrique",
        "Aden", "Lennox", "Drake", "Khalil", "Tate", "Zayne", "Milan", "Brock", "Brendan", "Armando", "Gerardo",
        "Jamison", "Rocco", "Nasir", "Augustus", "Sterling", "Dillon", "Royal", "Royce", "Moses", "Jaime", "Johan",
        "Scott", "Chandler", "Raul", "Remy", "Cason", "Luka", "Mohamed", "Deacon", "Winston", "Albert", "Pierce",
        "Taylor", "Nikolai", "Bowen", "Danny", "Francis", "Brycen", "Jayson", "Moises", "Keith", "Hank", "Quentin",
        "Kasen", "Donald", "Julio", "Davis", "Alec", "Kolton", "Lawrence", "Rhys", "Kian", "Nico", "Matthias",
        "Kellan", "Mathias", "Ariel", "Justice", "Braden", "Rodrigo", "Ryland", "Leonidas", "Jerry", "Ronin",
        "Alijah", "Kobe", "Lewis", "Dennis", "Luciano", "Ahmed", "Frederick", "Darius", "Arjun", "Dax", "Asa",
        "Nixon", "Ezequiel", "Eden", "Tony", "Landyn", "Emmitt", "Mathew", "Kyson", "Otto", "Saul", "Uriel",
        "Colby", "Dustin", "Omari", "Raphael", "Brennan", "Callen", "Keaton", "Arturo", "Isaias", "Roy", "Kieran",
        "Ty", "Dorian", "Cannon", "Marvin", "Cullen", "Sage", "Uriah", "Darren", "Cayson", "Aarav", "Case",
        "Izaiah", "Armani", "Gustavo", "Jimmy", "Alberto", "Duke", "Rayan", "Chris", "Casey", "Roland", "Moshe",
        "Curtis", "Mauricio", "Alonzo", "Yusuf", "Nikolas", "Soren", "Hamza", "Jasiah", "Alfredo", "Devon", "Jalen"
    ];

    const lastNames = [
        'Andersson'
    ];

    const firstName = getRandomValueFromList(firstNames);
    const lastName = getRandomValueFromList(lastNames);

    return {
        firstName: firstName,
        lastName: lastName,
        fullName: firstName + ' ' + lastName
    }
}

class BankIdClient {

    async init(pnr) {
        await fakeApiCall(200);
        return {
            'orderRef': uuid.v4()
        }
    }

    async collect(orderRef) {
        const statuses = ['in_progress', 'complete'];
        const reasons = {
            'in_progress': [
                'waiting-for-app-to-start',
                'sign'
            ],
            'complete': [
                'complete'
            ]
        };
        
        const status = getRandomValueFromList(statuses);
        const reason = getRandomValueFromList(reasons[status]);

        await fakeApiCall(200);
        return {
            'status': status,
            'message': reason
        }
    }

    async getCompletionData(orderRef) {
        const userInfo = generateRandomName();
        await fakeApiCall(200);
        return {
            'user': {
                'personalNumber': generateRandomPersonalNumber(),
                'name': userInfo.fullName,
                'givenName': userInfo.firstName,
                'surname': userInfo.lastName,
            },
            'device': {
                'ipAddress': ''
            },
            'cert': {
                'notBefore': '',
                'notAfter': ''
            }
        }
    }
}

module.exports = new BankIdClient();