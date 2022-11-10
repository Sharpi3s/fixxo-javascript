export const submitData = async (url, method, data, contentType = 'application/json') => {
    
    const res = await fetch(url, {
        method: method,
        headers: {
        'Content-Type': contentType
        },
        body: data
    })

    if (res.status === 200)
        return true

    return false
}



export const validate = (e, form = null) => {
   if (e.type === 'submit') {
    const errors = {}
    errors.name = validateName(form.name)
    errors.email = validateEmail(form.email)
    errors.comments = validateComments(form.comments)
    return errors

   } else {
        const {id, value} = e.target
        switch(id) {
            case 'name':
                return validateName(value)
            case 'email':
                return validateEmail(value)
            case 'comments':
                return validateComments(value)
        }
   }
}


const validateName = (value) => {
    if (!value)
        return 'A name is required'
    else if (value.length < 2)
        return 'Cannot be shorter then 2 letters'
    else
        return null
}

const validateEmail = (value) => {
    const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!value)
        return 'An email address is required'
    else if (!regex_email.test(value))
        return 'Please enter a valid email'
    else
        return null
}

const validateComments = (value) => {
    if (!value)
        return 'A comment is required'
    else if (value.length < 5)
        return 'Please enter a longer comment, minimum of characters'
    else
        return null
}