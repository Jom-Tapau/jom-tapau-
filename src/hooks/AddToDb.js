const addToDb = (newUser,setErrorMsg)=>{

    fetch('http://localhost:5000/user', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
        .then(res => res.json())
        .then(data => {
          if(data.errorMessage){
            setErrorMsg(data.errorMessage)
          }
          else{
            console.log(data.insertedId);
          }
        })
}

export default addToDb;