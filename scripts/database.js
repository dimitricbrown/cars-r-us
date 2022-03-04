const database = {
    paintColors: [
        {
            id: 1, 
            color: "Silver",
            price: 1.00
        },
        {
            id: 2,
            color: "Midnight Blue",
            price: 2.00
        },
        {
            id: 3,
            color: "Firebrick Red",
            price: 3.00
        },
        {
            id: 4,
            color: "Spring Green",
            price: 4.00
        }
    ],
    interiors: [
        {
            id: 1,
            type: "Biege Fabric",
            price: 20.00
        },
        {
            id: 2,
            type: "Charcoal Fabric",
            price: 40.00
        },
        {
            id: 3,
            type: "White Leather",
            price: 60.00
        },
        {
            id: 4,
            type: "Black Leather",
            price: 80.00
        }
    ],
    technologies: [
        {
            id: 1,
            package: "Basic Package (basic sound system)",
            price: 100.00
        },    
        {
            id: 2,
            package: "Navigation Package (includes integrated navigation controls)",
            price: 200.00
        },    
        {
            id: 3,
            package: "Visibility Package (includes side and reat cameras)",
            price: 300.00
        },    
        {
            id: 4,
            package: "Ultra Package (includes navigation and visibility packages)",
            price: 400.00
        }
    ],
    wheels: [
        {
            id: 1,
            type: "17-inch Pair Radial",
            price: 100.00
        },
        {
            id: 2,
            type: "Charcoal F17-inch Pair Radial",
            price: 150.00
        },
        {
            id: 3,
            type: "18-inch Pair Spoke Silver",
            price: 200.00
        },
        {
            id: 4,
            type: "18-inch Pair Spoke Black",
            price: 250.00
        }
    ]
}

export const getColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechs = () => {
    return database.technologies.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}