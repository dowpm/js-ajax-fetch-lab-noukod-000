function getIssues() {

  fetch('https://api.github.com/repos/dowpm/javascript-fetch-lab/issues', {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  console.log(json)
  $('#issues').html(json.map(issue=>{
    return `<ul>
    <li><strong>${issue.title}</strong><br>${issue.body}</li>
    </ul>`
  }))
}

function createIssue() {
  const title = document.getElementById('title').value//$('#title').val()
  const content = document.getElementById('body').value//$('#body').val()

  fetch(`https://api.github.com/repos/dowpm/javascript-fetch-lab/issues`,{
    method: 'post',
    body: JSON.stringify({title: title, body: content}),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then()
}

function showResults(json) {
  $('#results').html(`<a href='${json.html_url}'>${json.html_url}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
