IN THIS I HAVE ADDED MANY FUNCTIONALITIES:
1. I HAVE ADDED FORM VALIDATION LIKE IN THE
    a)In the Contract Value and Claim Value only numbers are allowed
    b)In the place and language only alphabets are allowed
    c)During while upload we cannot upload more than 2MB
    d)Multiple submits not allowed, What I have done is that suppose we clicked on submit option i made a promise,
    await new Promise((resolve) => setTimeout(resolve, 5000));
    so it takes 5 sec, so during this 5 sec no another submit is allowed so thus avoiding multiple submits.

2.I have use the react-router-dom package to create routes for the sidebar.
3.I have used the react-hook-form package to handle form data.
4.I have used the react-icons package to display icons.




My approach was simple firstly I created three components:
Sidebar.js
ClaimForm.js
ProgressSteps.js
In Sidebar.js I firstly put all items in an array and then used map function to display and same goes for ProgressSteps
The form we created in frontend we can send to backend via a FormData (/multipart/form)




On submit it shows an alert 
We can also use react-toastify to display a toast.

