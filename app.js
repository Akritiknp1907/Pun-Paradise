const apiBody = document.querySelector(".api_body");

const apiurl = "https://icanhazdadjoke.com/";

const fetchData = () =>{
        fetch(apiurl, {
            headers: {
                Accept: "application/json",
            },
        })
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((data) => {
            console.log(data.joke);
            apiBody.innerHTML = data.joke;
        })
        .catch((error) => {
            console.log(error);
        });
};

document.getElementById("fetchJoke").addEventListener("click",fetchData);