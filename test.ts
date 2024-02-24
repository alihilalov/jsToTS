//  Part 1
interface IProfile {
    name: string,
    age: number,
    course?: string,
    hobbies: string[]
}

const studentProfile: IProfile = {
    name: "Ali",
    age: 19,
    course: "EAcampSchool",
    hobbies: ["hiking", "coding", "watching football"]
}

delete studentProfile.course;

// Part 2
const { name: studentName, age, ...rest } = studentProfile
console.log(`Destructuring elements are : ${studentName} and ${age}`);
console.log(rest);

// Part 3 
const grades: number[] = [31, 1243, 13, 123, 12, 312, 2, 312]
console.log(grades[0]);
console.log(grades[1]);
console.log(grades[2]);

// Part 4
interface iAdd {
    address: string,
    phoneNumber: string
}
const additionalInfo = {
    address: "Sumqayit Kotec",
    phoneNumber: "+994502312340"
}

const compileteProfile = { ...studentProfile, ...additionalInfo }
console.log(compileteProfile);

// Task 2
//  Part 1

interface IDetails {
    fullname: string;
    position: string;
    yearOfExperience: number;
    contact: {
        email?: string;
        phone: number;
    };
}

const employeeDetails: IDetails = {
    fullname: "Ali Hilalov",
    position: "Student",
    yearOfExperience: 3,
    contact: {
        email: "hilalovali0501@gmail.com",
        phone: 994514132482
    }
};

delete employeeDetails.contact.email;
// Part 2

interface IExtendedEmpData extends IDetails {
    department: string;
}

const extendedEmployeeDetails: IExtendedEmpData = {
    fullname: "Ali Hilalov",
    position: "Student",
    yearOfExperience: 0,
    contact: {
        phone: 994514132482
    },
    department: "IT"
};