import React from 'react'

function GithubProfile({value}) {
    
  return (
    <div> 
        <h1>GitHub of {value.login}</h1>
        <div className='card'>
          
            <img src={value.avatar} alt="userprofile" />
            <div className='information'>
            <p>Bio :- {value.bio}</p>

            <p>Followers :- {value.follower}</p>
            <p>Following :- {value.following}</p>
            </div>
        </div>
           {repoData === null ? <h1>Search Your Profile</h1> :    <Repo value={repoData}/> }
         
    </div>
  )
}

export default GithubProfile