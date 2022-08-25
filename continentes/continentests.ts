interface Represents {
    name: string;
    lastName: string;
    country: string;
    continent: string;
    greetings?: string
}


const continentsRepresented: Represents[] = [
    {
        name: 'Martin',
        lastName: 'Milone',
        country: 'Argentina',
        continent: 'Americas'
    },
    {
        name: 'Marcela',
        lastName: 'Camerota',
        country: 'italia',
        continent: 'Europa',
    },
    {
        name: 'Liam',
        lastName: 'Milone',
        country: 'Japon',
        continent: 'Asia'
    },
    {
        name: 'Terry',
        lastName: 'Milone',
        country: 'Egipto',
        continent: 'Africa'
    },
    {
        name: 'Eevee',
        lastName: 'Milone',
        country: 'Australia',
        continent: 'Oceania'
    }
]

const CONTINENTS = [ 'Americas', 'Europa', 'Oceania', 'Africa', 'Asia' ]

function findRepresents( list: string[], peopleList: Represents[] ): boolean {
    for( let key of list) {
       if(!peopleList.find( elem => elem.continent === key)) {
            return false
       }
    }
    return true
}

console.log(findRepresents(CONTINENTS, continentsRepresented))

function addGreetings( peopleList: Represents[] ): Represents[] {
    const newpeopleList = peopleList.map( elem =>{
        return {
            ...elem,
            greetings: `hi soy ${elem.name} from ${elem.country}`
        }
    })
    return newpeopleList
}

console.log(addGreetings(continentsRepresented))

