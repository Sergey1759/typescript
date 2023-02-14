////////////////////////////////Interfaces and Types

// The biggest difference between interface and type is that interface can only be used to type objects,
// while type can be used to type objects, primitives, and more.
// As it turns out, type is more versatile and functional than interface. So why would we use interface?

// Sometimes, we don’t want a type that can do everything.
// We’d like our types to be constrained so we’re more likely to write consistent code.
// Since interface may only type objects, it’s a perfect match for writing object-oriented programs
// because these programs need many typed objects. So, let’s get started writing types with interface.

// Write an interface here
interface Run {
    miles: number
}

function updateRunGoal(run:Run) {
    console.log(`
Miles left:       ${50 - run.miles}
Percent of goal:  ${(run.miles / 50) * 100}% complete
  `)
}

updateRunGoal({
    miles: 5,
})
////------------2

// Write an interface here
// interface Directory{
//     addFile:(name:string) => void;
// }
//
// class DesktopDirectory implements Directory{
//     addFile(name: string) {
//         console.log(`Adding file: ${name}`);
//     }
//
//     showPreview(name: string) {
//         console.log(`Opening preview of file: ${name}`);
//     }
// }
//
// const Desktop = new DesktopDirectory();
//
// Desktop.addFile('lesson-notes.txt');
// Desktop.showPreview('lesson-notes.txt');


//////////////////////////3
// interface Directory {
//     addFile: (name: string) => void;
//     // Define a config type member here
//     config:{
//         default:{
//             encoding: string,
//             permissions: string
//         }
//     }
// }
//
// class DesktopDirectory implements Directory {
//     config = {
//         default: {
//             encoding: 'utf-8',
//             permissions: 'drw-rw-rw-',
//         }
//     }
//
//     addFile(name: string) {
//         console.log(`Adding file: ${name}`);
//     }
//
//     showPreview(name: string) {
//         console.log(`Opening preview of file: ${name}`);
//     }
// }
//
// const Desktop = new DesktopDirectory();
//
// console.log(Desktop.config);