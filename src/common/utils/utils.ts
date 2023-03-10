import { CARGO_STATUS } from "../constants";

export function convertToAsterisks(value: string): string {
    let result = value.substring(0, 1);
    for (let i = 0; i < 3; i++) {
        result += '*';
    }
    return result;
}


export function generateCode(): string {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

export function setCargoStatus(status: number): CARGO_STATUS {
    switch (status) {
        case 1:
            return CARGO_STATUS.WAITING;
        case 2:
            return CARGO_STATUS.TRANSFER;
        case 3:
            return CARGO_STATUS.TRANSFERED_BY_DRIVER;
        case 4:
            return CARGO_STATUS.RECEIVED;
        case 5:
            return CARGO_STATUS.RECEIVED_WITH_PROBLEM;
        case 6:
            return CARGO_STATUS.NOT_RECEIVED;
    }
}

export function hideUserCharacters(fullName: string): string {
    const splitedFullName = fullName.split(" ");
    const name = splitedFullName[0];
    const surname = splitedFullName[splitedFullName.length - 1];
    return `${name[0]}${"*".repeat(name.length - 1)} ${surname[0]}${"*".repeat(surname.length - 1)}`;
}