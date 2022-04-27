let button = document.getElementById('btn');
let reposbtn = document.getElementById('reposbtn');

let repos_name = [];
let repos_link = [];

function findAcc()
{
    let inputValue = document.getElementById("inputValue").value;
    fetch(`https://api.github.com/users/${inputValue}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.login);
        let tableData = "";
        tableData += 
        `
        <tr>
            <td class="text-center"><img width=200 src="${data.avatar_url}"/></td>
        </tr>
        <tr>
            <td class="text-center">${"Name: "+data.name}</td>
        </tr>
        <tr>
            <td class="text-center">${"Username: "+data.login}</td>
        </tr>
        <tr>
            <td class="text-center">${"Followers: "+data.followers}</td>
        </tr>
        <tr>
            <td class="text-center">${"Following: "+data.following}</td>
        </tr>
        <tr>
            <td class="text-center">${"No. of public repositories: "+data.public_repos} 
            <br>
            <input type="button" value="DETAILS ABOUT PUBLIC REPOSITORIES" id="reposbtn" onclick="reposDetails()">
        </tr>
        `;
        document.getElementById("table_body").innerHTML = tableData;

        showRepos(data);
    }).catch((err)=>console.log(err))
}

function showRepos({repos_url})
{
    console.log(repos_url);
    fetch(repos_url).then(res => res.json()).then(data => {
        repos_data = data;
        console.log("Repose_data: ",repos_data);
        console.log(data);
        console.log(data[0].name);
        //let tableData = "";
        data.map((values, i)=>{
            /*tableData += 
            `<tr>
                <td class="text-center">${values.name}</td>
                <td class="text-center"><a href="https://${values.owner.login}.github.io/${values.name}/">${"https://"+values.owner.login+".github.io/"+values.name}</a></td>
            </tr>`;*/

            repos_name[i] = values.name;
            repos_link[i] = "https://"+ values.owner.login +".github.io/" + values.name + "/";
            
            /*for(let i = 0; i <= data.length; i++)
            {
                console.log(i);
                repos_name[i] = values.name;
                repos_link[i] = "https://"+ values.owner.login +".github.io/" + values.name + "/";
            }*/
        });
    for(let i = 0; i <= data.length; i++)
    {
        console.log(repos_name[i]);
        console.log(repos_link[i]);
        console.log("-------------------------------");
    }
    //document.getElementById("table_repos_body").innerHTML = tableData;
    }).catch((err)=>console.log(err))
}

function reposDetails()
{
    window.location.href = `file:///D:/Accelalpha/5%20-%20Github%20Account%20Viewer/repos.html?repos_name=${repos_name}&repos_link=${repos_link}`;
    //showRepos();
    //let url = `file:///D:/Accelalpha/5%20-%20Github%20Account%20Viewer/repos.html?repos_name=${repos_name}&repos_link=${repos_link}`;
    //console.log(url);
    //let params = (new URL(url)).searchParams;
    //params.get('name'); 
    //;
    //console.log(params.getAll('repos_name'));
    
    //document.getElementById("url_name").innerHTML = parameters;
}