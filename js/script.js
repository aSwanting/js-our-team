const teamMember = [
    {
        name: "Wayne Barnett",
        position: "Founder & CEO",
        portrait: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        position: "Chief Editor",
        portrait: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        position: "Office Manager",
        portrait: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        position: "Social Media Manager",
        portrait: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        position: "Developer",
        portrait: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        position: "Graphic Designer",
        portrait: "barbara-ramos-graphic-designer.jpg"
    }
]

for (let member of teamMember) {
    console.log("")
    console.log("Team Member Info:")
    console.log("   Name: " + member.name)
    console.log("   Position: " + member.position)
    console.log("   img: " + member.portrait)
}


// debugger