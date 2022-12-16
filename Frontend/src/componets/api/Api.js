import axios from "axios"
export function PostData({name, batch,location,experience,contact}) {
    return axios.post("https://render-new-awc0.onrender.com/data", {
        name: name,
        batch: batch,
        location: location,
        experience: experience,
        contact: contact
    })
}

export function GetData(page) {
    console.log(page)
    return axios.get(`https://render-new-awc0.onrender.com/data?_page=${page}&_limit=8`) 
}


export function GetdataId(query) {
    console.log(query)
    return axios.get(`https://render-new-awc0.onrender.com/data?location=${query}`)
}