
// Generate page content on load
document.addEventListener("DOMContentLoaded", () => {

    printTeamMemberInfo(buildFlexContainer())

})


//Build flex container
function buildFlexContainer() {

    const container = createDOMobjectPrepend("div", document.body, "container card-wrapper", "card-wrapper", "")
    createDOMobjectAppend("h1", container, "container-header", "", "Our Team")
    return container

}



// Print TeamMember info to DOM
function printTeamMemberInfo(container) {

    const teamMember = [
        {
            name: "Wayne Barnett",
            position: "Founder & CEO",
            portrait: "./img/wayne-barnett-founder-ceo.jpg"
        },
        {
            name: "Angela Caroll",
            position: "Chief Editor",
            portrait: "./img/angela-caroll-chief-editor.jpg"
        },
        {
            name: "Walter Gordon",
            position: "Office Manager",
            portrait: "./img/walter-gordon-office-manager.jpg"
        },
        {
            name: "Angela Lopez",
            position: "Social Media Manager",
            portrait: "./img/angela-lopez-social-media-manager.jpg"
        },
        {
            name: "Scott Estrada",
            position: "Developer",
            portrait: "./img/scott-estrada-developer.jpg"
        },
        {
            name: "Barbara Ramos",
            position: "Graphic Designer",
            portrait: "./img/barbara-ramos-graphic-designer.jpg"
        }
    ]

    for (let i = 0; i < teamMember.length; i++) {

        const member = teamMember[i]
        const memberNumber = i + 1

        const memberCard = createDOMobjectAppend("div", container, "member-card", "member-card-" + memberNumber, "")
        createDOMobjectAppend("img", memberCard, "member-portrait", "member-" + memberNumber,).src = member.portrait
        createDOMobjectAppend("p", memberCard, "member-name", "member-" + memberNumber, member.name)
        createDOMobjectAppend("p", memberCard, "member-position", "member-" + memberNumber, member.position)

    }

}


// Function to create and append DOM element
function createDOMobjectAppend(type, location, className, id, inner) {

    const DOMobject = document.createElement(type)
    location.append(DOMobject)
    DOMobject.className = className
    DOMobject.id = id
    DOMobject.innerHTML = inner
    return DOMobject

}

// Function to create and prepend DOM element
function createDOMobjectPrepend(type, location, className, id, inner) {

    const DOMobject = document.createElement(type)
    location.prepend(DOMobject)
    DOMobject.className = className
    DOMobject.id = id
    DOMobject.innerHTML = inner
    return DOMobject

}



// debugger