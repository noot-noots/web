const url = "http://13.236.93.26/alter-image"


export const PostImage = async (data) => {
    // if (items.resizeHeight !== "" || items.resizeWidth !== "") {
    //     url = `${url}resiz`
    // }
    const nUrl = CreateQuery(data);
    console.log(nUrl);

    
}

const CreateQuery = (data) => {
    var nUrl = `${url}?rotate=${data.rotate}`;

    Object.entries(data).map(([key, value]) => {
        if (key !== "rotate" && value !== null) {
            nUrl += `&${key}=${value}`
        }
        return nUrl;
    })
    return nUrl;
}