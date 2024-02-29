import React from 'react';

export function Component() {
    let miser = 5;
    return (
      <p>Nick McCarroll {miser}</p>      
    );
}

// This function we made can be referenced anywhere in the program.

// Ways that you can use components are:
// Say for instance you have a blog, and there are a couple of sections where you
// would wanna have a comment section space for a page. Instead of making the same
// html over and over again, we can store it in a component and deploy it in the main
// App.js wherever we want.

// Remember to wrap your return statement in one tag.