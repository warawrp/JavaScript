// แบบเก่า
    let person = {
        name: 'Waraphorn',
        skill: 'css boostrap'
    }
    let name = person.name
    // console.log(name);
    let skill = person.skill
    // console.log(skill);

    console.log(`${name} ${skill}`);

//แบบใหม่
    let player = {
    name2: 'Waraphorn',
    skill2: 'css html'
}
    let {name2,skill2} = player
    console.log(`${name2} ${skill2}`);