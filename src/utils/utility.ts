export const starwars = (e: { target: { style: { fontFamily: string; }; }; }) => e.target.style.fontFamily = "starwars";

export const aurebesh = (e: { target: { style: { fontFamily: string; }; }; }) => e.target.style.fontFamily = "aurebesh";

export const loadImage = (imageName: string, setState: (arg: string) => void) => {
    import(`../images/${imageName}`).then(image => {
        setState(image.default)
    })
}