import { ILaunch } from "../schemas/launchSchema";

const launchUrl = `https://api.spacexdata.com/v5/launches/`;

export const getAllLaunches = (): Promise<ILaunch[]> => {
    return new Promise((resolve, reject) => {
        fetch(launchUrl).then(async (response) => {
            const data = response.json();
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    })
}