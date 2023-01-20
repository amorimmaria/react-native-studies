const githubToken = "TOKEN_GITHUB"

const headers = new Headers({
'Authorization': `Bearer ${githubToken}`
});

const options = {
  method: 'GET',
  headers
};

export async function getGitHubUser(username: string) {
  
  try {
  const response = await fetch(`https://api.github.com/users/${username}`, options)
  
  const responseJSON = await response.json() 

  return responseJSON

  } catch(error){

  }
  
}

