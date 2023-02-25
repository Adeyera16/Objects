// InstagramPost() using constructor function
function InstagramPost(authorHandle, content, imageLink, numberOfViews, numberOfLikes){
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;

}

const instaPost1 = new InstagramPost("naija_blog", "The most popular naija posting site in the world is naija_blog. It’s also the one with the most traffic of any blog.", "https://picsum.photos/200/300", 30000, 2500);

const instaPost2 = new InstagramPost("tech_blog", "This is my first bost.", "https://picsum.photos/id/237/200/300", 3000, 1500);

console.log(instaPost1)
console.log(instaPost2)

// factory method Ouestion 3

function createPerson(name, age, location){
    return{
        name: name,
        age: age,
        location: location
    }
}

const musa = createPerson("Musa", 19, "Lekki");

function createJambScores(eng, govt, lit, crk){
    return{
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk
    }
}

const musaJambScores = createJambScores(70, 85, 82, 94);

musa.createJambScores = musaJambScores

console.log(musa.createJambScores  )

// How do we clone an object
// Option 1 - Using Object.assign()
const person1 = {
    name: "Elizabeth",
    age: 19,
    location: "Abule-Egba"
}

const person2 = Object.assign({}, person1)

person2.name = "Adeyera";
console.log(person2)

// Option 2 - Using spread syntax (...)
const person3 = {... person1}
person3.name = "Busayo";
console.log(person3)


// Enumeration methods
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

for (const property in presidentialCandidates){
    console.log(presidentialCandidates[property] + "  is the presidential candidate of " + property )
}
