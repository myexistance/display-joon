export function getProject1() {
  return fetch('http://localhost:3333/project1')
    .then(data => data.json())
}

export function getProject2() {
  return fetch('http://localhost:3333/project2')
    .then(data => data.json())
}

export function getProject3() {
  return fetch('http://localhost:3333/project3')
    .then(data => data.json())
}

export function getProject4() {
  return fetch('http://localhost:3333/project4')
    .then(data => data.json())
}