import React from 'react'

function Blog() {
  return (
    <div className='h-screen w-4/5 mx-auto my-10'>
       <div>
          <h4 className='text-2xl mt-3'>1. What are the different ways to manage a state in a React application?</h4>
            <p className='text-start ml-7'>A common example of global state is authenticated user state.<br></br> If a user is logged into our app, it is necessary to get and change their data throughout our application.</p>
       </div>
       <div className='my-9'>
           <h4 className='text-2xl mt-3'>2. How does prototypical inheritance work?</h4>
            <p className='text-start ml-7'>A common example of global state is authenticated user state.<br></br> If a user is logged into our app, it is necessary to get and change their data throughout our application.</p>
       </div>
       <div className='my-9'>
           <h4 className='text-2xl mt-3'>3. What is a unit test? Why should we write unit tests?</h4>
            <p className='text-start ml-7'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.<br></br> If a user is logged into our app, it is necessary to get and change their data throughout our application.</p>
       </div>
       <div className='my-9'>
           <h4 className='text-2xl mt-3'>4. React vs. Angular vs. Vue?</h4>
            <p className='text-start ml-7'>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
       </div>
    </div>
  )
}

export default Blog