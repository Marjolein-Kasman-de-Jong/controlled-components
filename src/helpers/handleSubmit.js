function handleSubmit(e, userName, userAge, userRemarks, newsletter) {
    e.preventDefault()
    console.log(userName, userAge, userRemarks, newsletter)
}

export default handleSubmit;