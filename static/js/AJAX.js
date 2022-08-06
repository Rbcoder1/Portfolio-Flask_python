console.log("this is ajax file")
const projectMain = document.getElementById("projectMain");

const image = ["https://source.unsplash.com/1600x900/?coding,javacript",
  "https://source.unsplash.com/1600x900/?website,coding",
  "https://source.unsplash.com/1600x900/?assembly language,cpp",
  "https://source.unsplash.com/1600x900/?social media, instagram",
  "https://source.unsplash.com/1600x900/?coding,python,data",
  "https://source.unsplash.com/1600x900/?programming"
]

const spinner = document.getElementById("loader")

spinner.style.display = "block"
fetch("https://api.github.com/users/Therohhacker/repos")
  .then((Response) => { return Response.json() })
  .then((data) => {
    spinner.style.display = "none"
    let count = 0;

    for (item of data) {

      itemName = item.name
      description = item.description
      avatar_url = item.owner
      console.log(item)
      str = `<div class="col mb-4">
                <div class="card h-100" id = "image">
                  <img src="${image[count]}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${itemName} </h5>
                    <p class="card-text">${description}</p>
                  </div>
                  <div class="card-footer">
                    <small class="texxt-muted">Created at ${item.created_at}</small><br>
                    <small class="text-muted">Updated at ${item.updated_at}</small><br>
                    <a href="${item.html_url}">More Info</a>
                  </div>
                </div>
              </div>
    `
      projectMain.innerHTML += str
      count++;
    }

  }).catch(error =>{
    console.log(error)
  })

fetch("https://api.github.com/users/Rbcoder1/repos")
  .then((Response) => { return Response.json() })
  .then((data) => {
    // console.log(data)
    let count1 = 0;

    for (item of data) {
      itemName = item.name
      description = item.description
      avatar_url = item.owner
      str = `<div class="col mb-4">
            <div class="card h-100" id = "image">
              <img src="${image[count1]}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${itemName} </h5>
                <p class="card-text">${description}</p>
              </div>
              <div class="card-footer">
                <small class="texxt-muted">Created at ${item.created_at}</small><br>
                <small class="text-muted">Updated at ${item.updated_at}</small><br>
                <a href="${item.html_url}">More Info</a>
              </div>
            </div>
          </div>
`
      projectMain.innerHTML += str
      count1++;
    }
  })

let acess_key = "LPNWD1_0XJ9uUidnNW4HpGb7YeFufjz-mtXjyJ0Q-Oks"
let un_api = `https://api.unsplash.com/photos/random/?client_id=${acess_key}`