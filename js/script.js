document.addEventListener("DOMContentLoaded", printTeamMemberInfo)

// Print TeamMember info to DOM
function printTeamMemberInfo() {

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

    for (let i = 0; i < teamMember.length; i++) {

        const member = teamMember[i]
        const memberNumber = i + 1

        const memberCard = createDOMobject("div", document.body, "member-card", "member-card-" + memberNumber, "")
        createDOMobject("p", memberCard, "member-info", "member-" + memberNumber, member.name)
        createDOMobject("p", memberCard, "member-info", "member-" + memberNumber, member.position)
        createDOMobject("p", memberCard, "member-info", "member-" + memberNumber, member.portrait)

    }

}


// Function to create DOM element
function createDOMobject(type, location, className, id, inner) {

    const DOMobject = document.createElement(type)
    location.append(DOMobject)
    DOMobject.className = className
    DOMobject.id = id
    DOMobject.innerHTML = inner
    return DOMobject

}



// debugger