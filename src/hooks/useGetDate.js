
const  useGetDate = () =>{
     // generate the date of today
     const day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const date = new Date();
    const today = date.getDate() + " " + day[date.getDay()] + " " + monthNames[date.getMonth()];

    return {
        date,today
    }
}

export default useGetDate;